import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

const MeetupItem = (props) => {
  const favCtx = useContext(FavouritesContext);
  const itemIsFavourite = favCtx.itemIsFavourite(props.id);

  const toggleFavouriteStatusHandler = () => {
      if(itemIsFavourite){
          favCtx.removeFavourite(props.id);
      }else{
          favCtx.addFavourite({
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.address
          });
      }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Favourite" : "Add to favourite"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
