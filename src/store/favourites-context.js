import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (id) => {},
  itemIsFavourite: (meetupId) => {},
});

export const FavouritesContextProvider = (props) => {
  const [userFavourites, setUserFavourites] = useState([]);

  const addFavouriteHandler = (favouriteMeetup) => {
    setUserFavourites((prevState) => [...prevState, favouriteMeetup]);
  };

  const removeFavouriteHandler = (meetupId) => {
    setUserFavourites((prevState) =>
      prevState.filter((singleState) => singleState.id !== meetupId)
    );
  };

  const itemIsFavouriteHandler = (meetupId) => {
    return userFavourites.some((favourite) => favourite.id === meetupId);
  };

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
