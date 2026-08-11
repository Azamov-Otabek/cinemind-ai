import { useParams } from "react-router-dom";
import "./CollectionDetails.scss";
import { collections } from "../../data/collections";
import MediaCard from "../../components/MediaCard/MediaCard";
import Dune from "../../assets/images/dune.jpg";
import Intersteller from "../../assets/images/intersteller_card.jfif";
import Batman from "../../assets/images/batman.jpg";
import Oppenheimer from "../../assets/images/oppenheimer.jpg";

const collectionData = [
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

const CollectionDetails = () => {
  const { id } = useParams();
  const collection = collections.find((item) => item.id === Number(id));

  return (
    <div className="collection-details">
      <div
        className="collection-details__hero"
        style={{ backgroundImage: `url(${collection?.image})` }}
      >
        <div className="collection-details__overlay">
          <h1>{collection?.title}</h1>
          <p>{collection?.description}</p>
          <span>{collection?.count} movies</span>
        </div>
      </div>

      <div className="collection-details__grid">
        {collectionData.map((movie) => (
          <MediaCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;
