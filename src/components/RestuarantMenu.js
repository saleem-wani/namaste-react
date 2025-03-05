

import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});
  const {resId}=useParams();
  console.log(resId)
  


  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
        MENU_API + resId
      
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  const cards = resInfo?.cards || []; // Safe fallback in case cards is undefined
  const menu = cards[2]?.card?.card?.info; // Safe access to the menu

  const { name, costForTwoMessage, cuisines } = menu || {};

  // Use optional chaining and check if the nested objects exist before accessing itemCards
  const itemCards = cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

  console.log(itemCards); // Check what the itemCards array looks like

  // Render a loading shimmer until the data is available
  return !name ? (
    <ShimmerUI />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}{"  Rs  "}{item.card.info.price/100}</li>)}
       
      </ul>
    </div>
  );
};

export default RestaurantMenu;


