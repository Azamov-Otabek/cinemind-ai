import { useNavigate } from "react-router-dom";
import "./MovieDetails.scss";
import interstellarPoster from "../../assets/images/intersteller_card.jfif";
import { Play, Plus, ArrowLeft } from "lucide-react";

const MovieDetails = () => {
  // const { id } = useParams();
  const navigate = useNavigate()
  return (
    <div className="movie-details">
      <button onClick={() => {navigate(-1)}} className="movie-details-back-btn" type="button"><ArrowLeft size={18}/> Back</button>
      <div className="movie-details__poster">
        <img src={interstellarPoster} alt="Interstellar" />
      </div>

      <div className="movie-details__content">
        <h1 className="movie-details__title">Interstellar</h1>

        <p className="movie-details__description">
          A team of explorers travels through a wormhole in space in an attempt
          to ensure humanity's survival.
        </p>

        <div className="movie-details__meta">
          <span>⭐ 8.7</span>
          <span>2014</span>
          <span>Sci-Fi</span>
          <span>2h 49m</span>
        </div>

        <div className="movie-details__actions">
          <button
            className="movie-details__button movie-details__button--primary"
            type="button"
          >
            <Play size={18}/> Play Trailer
          </button>
          <button
            className="movie-details__button movie-details__button--secondary"
            type="button"
          >
           <Plus size={18}/>  My List
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
