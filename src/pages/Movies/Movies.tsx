import "./Movies.scss";
import Dune from "../../assets/images/dune.jpg";
import Intersteller from "../../assets/images/intersteller_card.jfif";
import Batman from "../../assets/images/batman.jpg";
import Oppenheimer from "../../assets/images/oppenheimer.jpg";
import MediaCard from "../../components/MediaCard/MediaCard";
import { useState } from "react";

const trendingMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    rating: 8.5,
    year: 2024,
    poster: Dune,
    genre: "Sci-Fi",
  },
  {
    id: 2,
    title: "Interstellar",
    rating: 8.7,
    year: 2014,
    poster: Intersteller,
    genre: "Sci-Fi",
  },
  {
    id: 3,
    title: "Batman",
    rating: 7.7,
    year: 2018,
    poster: Batman,
    genre: "Sci-Fi",
  },
  {
    id: 4,
    title: "Oppenheimer",
    rating: 9.7,
    year: 2020,
    poster: Oppenheimer,
    genre: "Sci-Fi",
  },
];

const Movies = () => {
  const [genre, setGenre] = useState("All");
  const [year, setYear] = useState("All");
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");

  const filteredMovies = trendingMovies
    .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
    .filter((movie) => genre === "All" || movie.genre === genre)
    .filter((movie) => year === "All" || movie.year === Number(year));

  const sortedMovies = [...filteredMovies];

  if (sort === "rating") {
    sortedMovies.sort((a, b) => b.rating - a.rating);
  }

  if (sort === "newest") {
    sortedMovies.sort((a, b) => b.year - a.year);
  }

  return (
    <div className="movies-page">
      <div className="movies-page__header">
        <div>
          <h1>Movies</h1>
          <p>Discover movies you'll love.</p>
        </div>
      </div>

      <div className="movies-page__filters">
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="All">All Genres</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
        </select>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="All">All Years</option>
          <option value="2024">2024</option>
          <option value="2020">2020</option>
          <option value="2018">2018</option>
          <option value="2014">2014</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="movies-page__grid">
        {sortedMovies.length > 0 ? (
          sortedMovies.map((movie) => <MediaCard key={movie.id} {...movie} />)
        ) : (
          <p className="movies-page__empty">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
