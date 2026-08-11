import "./TvShows.scss";
import MediaCard from "../../components/MediaCard/MediaCard";
import { useState } from "react";

const tvShows = [
  {
    id: 101,
    title: "Breaking Bad",
    rating: 9.5,
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    genre: "Drama",
  },
  {
    id: 102,
    title: "Stranger Things",
    rating: 8.7,
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    genre: "Sci-Fi",
  },
  {
    id: 103,
    title: "The Last of Us",
    rating: 8.7,
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    genre: "Drama",
  },
  {
    id: 104,
    title: "Game of Thrones",
    rating: 9.2,
    year: 2011,
    poster: "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    genre: "Action",
  },
];

const TvShows = () => {
  const [genre, setGenre] = useState("All");
  const [year, setYear] = useState("All");
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");

  const filteredShows = tvShows
    .filter((show) => show.title.toLowerCase().includes(search.toLowerCase()))
    .filter((show) => genre === "All" || show.genre === genre)
    .filter((show) => year === "All" || show.year === Number(year));

  const sortedShows = [...filteredShows];

  if (sort === "rating") {
    sortedShows.sort((a, b) => b.rating - a.rating);
  }

  if (sort === "newest") {
    sortedShows.sort((a, b) => b.year - a.year);
  }

  return (
    <div className="tv-page">
      <div className="tv-page__header">
        <h1>TV Shows</h1>
        <p>Discover popular TV shows and series.</p>
      </div>

      <div className="tv-page__filters">
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="All">All Genres</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
        </select>

        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="All">All Years</option>
          <option value="2023">2023</option>
          <option value="2016">2016</option>
          <option value="2011">2011</option>
          <option value="2008">2008</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>

        <input
          type="text"
          placeholder="Search TV shows..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="tv-page__grid">
        {sortedShows.length > 0 ? (
          sortedShows.map((show) => <MediaCard key={show.id} {...show} />)
        ) : (
          <p className="tv-page__empty">No TV shows found.</p>
        )}
      </div>
    </div>
  );
};

export default TvShows;
