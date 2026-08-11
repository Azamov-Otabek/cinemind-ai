import "./MediaCard.scss";
import { Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMyListStore } from "../../store/useMyListStore";

export type MediaCardProps = {
  title: string;
  rating: number;
  year: number;
  poster: string;
  id: number;
};

const MediaCard = ({ title, rating, year, poster, id }: MediaCardProps) => {
  const { items, toggleItem } = useMyListStore();
  const isSaved = items.some((item) => item.id === id);

  const navigate = useNavigate();

  return (
    <article onClick={() => navigate(`/movie/${id}`)} className="media-card">
      <div className="media-card__poster">
        <img src={poster} alt={title} />
        <button
          className="media-card__bookmark"
          type="button"
          onClick={(e) => {
            e.stopPropagation();

            toggleItem({
              id,
              title,
              rating,
              year,
              poster,
            });
          }}
        >
          <Bookmark fill={isSaved ? "currentColor" : "none"} size={18} />
        </button>
      </div>

      <h3 className="media-card__title">{title}</h3>

      <div className="media-card__meta">
        <span className="media-card__rating">⭐ {rating}</span>
        <span>{year}</span>
      </div>
    </article>
  );
};

export default MediaCard;
