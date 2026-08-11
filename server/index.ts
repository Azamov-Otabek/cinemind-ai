import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const ai = new OpenAI({
  baseURL: "https://ai.api.cloud.yandex.net/v1",
  apiKey: process.env.YANDEX_API_KEY,
});

type Recommendation = {
  title: string;
  year: number;
  genre: string;
  rating: number;
  reason: string;
};

app.post("/api/ai-finder", async (req, res) => {
  try {
    const { prompt, mood = "", genre = "", year = "" } = req.body;

    if (!prompt?.trim()) {
      return res.status(400).json({
        error: "Prompt is required",
      });
    }

    if (!process.env.YANDEX_API_KEY || !process.env.YANDEX_FOLDER_ID) {
      return res.status(500).json({
        error: "Server AI configuration is missing",
      });
    }

    const response = await ai.chat.completions.create({
      model: `gpt://${process.env.YANDEX_FOLDER_ID}/yandexgpt/latest`,

      messages: [
        {
          role: "system",
          content: `
You are CineMind AI, an expert movie recommendation assistant.

Recommend exactly 4 movies based on the user's request.

Return ONLY valid JSON.
Do not use markdown.
Do not use code fences.
Do not write anything before or after the JSON.

Use exactly this structure:

{
  "recommendations": [
    {
      "title": "Movie title",
      "year": 2024,
      "genre": "Sci-Fi",
      "rating": 8.5,
      "reason": "Short reason why this movie matches the request."
    }
  ]
}

Rules:
- Recommend real movies only.
- Return exactly 4 movies.
- rating must be a number from 0 to 10.
- year must be a number.
- reason must be short.
- Respect mood, genre and year preferences when provided.
`,
        },
        {
          role: "user",
          content: `
User request: ${prompt}
Mood: ${mood || "Any"}
Genre: ${genre || "Any"}
Year: ${year || "Any"}
`,
        },
      ],
    });

    const rawResult = response.choices[0]?.message?.content;

    if (!rawResult) {
      return res.status(500).json({
        error: "AI returned an empty response",
      });
    }

    // Ba'zan model ```json ... ``` yuborsa ham tozalab olamiz.
    const cleanedResult = rawResult
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let recommendations: Recommendation[];

    try {
      const parsed = JSON.parse(cleanedResult);

      if (!Array.isArray(parsed.recommendations)) {
        throw new Error("recommendations is not an array");
      }

      recommendations = parsed.recommendations;
    } catch (parseError) {
      console.error("AI JSON parse error:", parseError);
      console.error("AI response:", rawResult);

      return res.status(500).json({
        error: "AI returned invalid JSON",
        result: rawResult,
      });
    }

    res.json({
      // Hozirgi frontend ishlashda davom etishi uchun:
      result: rawResult,

      // Keyingi bosqichda MediaCard uchun:
      recommendations,
    });
  } catch (error) {
    console.error("AI Finder error:", error);

    res.status(500).json({
      error: "AI request failed",
    });
  }
});

app.listen(PORT, () => {
  console.log(`CineMind AI server: http://localhost:${PORT}`);
});

// type TmdbMovie = {
//   id: number;
//   title: string;
//   poster_path: string | null;
//   release_date?: string;
//   vote_average?: number;
// };

// const findMovieOnTmdb = async (title: string, year: number) => {
//   const params = new URLSearchParams({
//     query: title,
//     primary_release_year: String(year),
//     language: "en-US",
//   });

//   const response = await fetch(
//     `https://api.themoviedb.org/3/search/movie?${params}`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
//         accept: "application/json",
//       },
//     },
//   );

//   if (!response.ok) {
//     throw new Error("TMDB request failed");
//   }

//   const data = await response.json();

//   return data.results?.[0] as TmdbMovie | undefined;
// };
