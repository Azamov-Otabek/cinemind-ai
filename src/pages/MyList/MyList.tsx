import "./MyList.scss";
import MediaCard from "../../components/MediaCard/MediaCard";
import { useMyListStore } from "../../store/useMyListStore";

const MyList = () => {
  const items = useMyListStore((state) => state.items);

  return (
    <div className="my-list">
      <div className="my-list__header">
        <h1>My List</h1>
        <p>Your saved movies and TV shows.</p>
      </div>

      <div className="my-list__grid">
        {items.length > 0 ? (
          items.map((item) => <MediaCard key={item.id} {...item} />)
        ) : (
          <p className="my-list__empty">Your list is empty.</p>
        )}
      </div>
    </div>
  );
};

export default MyList;
