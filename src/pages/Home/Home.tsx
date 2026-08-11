import "./Home.scss";
import { Play, Plus } from "lucide-react";
import Dune from "../../assets/images/dune.jpg";
import Intersteller from "../../assets/images/intersteller_card.jfif";
import Batman from "../../assets/images/batman.jpg";
import Oppenheimer from "../../assets/images/oppenheimer.jpg";
import MovieSection from "../../components/MovieSection/MovieSection";

const trendingMovies = [
  { id: 1, title: "Dune: Part Two", rating: 8.5, year: 2024, poster: Dune },
  {
    id: 2,
    title: "Interstellar",
    rating: 8.7,
    year: 2014,
    poster: Intersteller,
  },
  { id: 3, title: "Batman", rating: 7.7, year: 2018, poster: Batman },
  {
    id: 4,
    title: "Oppenheimer",
    rating: 9.7,
    year: 2020,
    poster: Oppenheimer,
  },
];

const popularMovies = [
  { id: 5, title: "Dune: Part Two", rating: 8.5, year: 2024, poster: Dune },
  {
    id: 6,
    title: "Interstellar",
    rating: 8.7,
    year: 2014,
    poster: Intersteller,
  },
  { id: 7, title: "Batman", rating: 7.7, year: 2018, poster: Batman },
  {
    id: 8,
    title: "Oppenheimer",
    rating: 9.7,
    year: 2020,
    poster: Oppenheimer,
  },
];


const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1 className="hero__title">Interstellar</h1>
        <p className="hero__description">
          A team of explorers travels through a wormhole in space in an attempt
          to ensure humanity's survival.
        </p>
        <div className="hero__meta">
          <span>⭐ 8.7</span>
          <span>2014</span>
          <span>Sci-Fi</span>
          <span>2h 49m</span>
        </div>

        <div className="hero__actions">
          <button className="hero__button hero__button--primary" type="button">
            <Play size={18} /> Play Trailer
          </button>
          <button
            className="hero__button hero__button--secondary"
            type="button"
          >
            <Plus size={18} /> My List
          </button>
        </div>
      </section>

      <MovieSection title="Trending Now" movies={trendingMovies}/>

      <MovieSection title="Popular" movies={popularMovies}/>
    </div>
  );
};

export default Home;
