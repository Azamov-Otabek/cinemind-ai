import { useNavigate } from "react-router-dom";
import "./Collections.scss";
import { collections } from "../../data/collections";

const Collections = () => {
  const navigate = useNavigate();



  return (
    <div className="collections-page">
      <div className="collections-page__header">
        <h1>Collections</h1>
        <p>Explore curated movie collections.</p>
      </div>

      <div className="collections-page__grid">
        {collections.map((collection) => (
          <article className="collection-card" key={collection.id}  onClick={() => navigate(`/collections/${collection.id}`)}>
            <div className="collection-card__content">
              <h3>{collection.title}</h3>

              <p>{collection.description}</p>

              <span>{collection.count} movies</span>
            </div>

            <img src={collection.image} alt={collection.title} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Collections;
