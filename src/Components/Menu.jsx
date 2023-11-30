import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
const Menu = () => {
  const {resId} = useParams()
    
  const resInfo = useMenu(resId)


  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  //{//     let name, cuisines, costForTwoMessage;

  // if (resInfo?.cards[0]?.card?.card?.info) {
  //     ({ name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info);
  //
  // another way to deconstruct , idk whats happening here , ill try
  // }}//

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        Cuisines: {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <ul className="text-xl font-medium text-black">
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
