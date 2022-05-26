import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

const MainNavigation = () => {
  const favCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
                My Favourites
                <span className={classes.badge}>{favCtx.totalFavourites}</span>
                </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
