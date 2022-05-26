import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavouritesPage = () => {
  const favCtx = useContext(FavouritesContext);

  let content;

  if (!favCtx.totalFavourites) {
    content = <p>No favourites found</p>;
  }else{
      content= <MeetupList meetups={favCtx.favourites} />
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default FavouritesPage;
