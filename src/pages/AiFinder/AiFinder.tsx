import "./AiFinder.scss";
import { Sparkles } from "lucide-react";
import { useState } from "react";

const AiFinder = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [mood, setMood] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleFindMovies = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setResult("");

      const response = await fetch("http://localhost:3001/api/ai-finder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          mood,
          genre,
          year,
        }),
      });

      const data = await response.json();

      setResult(data.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-finder">
      <div className="ai-finder__header">
        <Sparkles size={28} />
        <h1>AI Movie Finder</h1>
        <p>
          Tell us what you're in the mood for and AI will find the perfect
          movie.
        </p>
      </div>

      <div className="ai-finder__form">
        <div className="ai-finder__filters">
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option value="">Any Mood</option>
            <option value="dark">Dark</option>
            <option value="fun">Fun</option>
            <option value="emotional">Emotional</option>
            <option value="mind-bending">Mind-bending</option>
          </select>

          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">Any Genre</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="action">Action</option>
            <option value="drama">Drama</option>
            <option value="thriller">Thriller</option>
          </select>

          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Any Year</option>
            <option value="2020s">2020s</option>
            <option value="2010s">2010s</option>
            <option value="2000s">2000s</option>
            <option value="classic">Classic</option>
          </select>
        </div>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Example: I want a dark sci-fi movie about space and survival..."
        />

        <button type="button" onClick={handleFindMovies} disabled={loading}>
          <Sparkles size={18} />
          {loading ? "Finding..." : "Find Movies"}
        </button>

        <div className="ai-finder__results">
          {loading && <p>AI is finding movies for you...</p>}

          {result && (
            <>
              <h2>AI Recommendations</h2>
              <p className="ai-finder__answer">{result}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiFinder;
