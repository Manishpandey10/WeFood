import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import { useState } from "react";


const Menu = () => {
  
  const {resId} = useParams()
  const resInfo = useMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      console.log(itemCards);

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-black text-3xl m-auto ">{name}</h1>
      <p className="text-2xl ">
        Cuisines: {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <ul className="list-disc list-inside m-auto">
        {itemCards.map((item)=>
        <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}
        </li>
        )}

      </ul>
    </div>
  );
};
export default Menu;
