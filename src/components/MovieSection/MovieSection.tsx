import MediaCard, { type MediaCardProps } from "../MediaCard/MediaCard";
import './MovieSection.scss'

type MovieSectionProps = {
  title: string;
  movies: MediaCardProps[];
};

const MovieSection = ({title, movies}: MovieSectionProps) => {
  return (
    <section className="movie-section">
        <div className="movie-section__header">
          <h2>{title}</h2>
          <button type="button">See All</button>
        </div>

        <div className="movie-section__grid">
          {movies.map((movie) => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.rating}
              year={movie.year}
              poster={movie.poster}
            />
          ))}
        </div>
      </section>
  )
}

export default MovieSection
