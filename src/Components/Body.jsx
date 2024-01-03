import RestroCard from "./RestroCard";
// import resList from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {

  const onlineStatus = useOnlineStatus()
  // 
  //console.log(useState())
  // state Variables
  //this is array destructuring on the fly ^^^^^
  //like this.
  // const arr = useState([])
  // const[listOfRestraunts, setListOfRestraunts] = arr


  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants]= useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const apiData = await data.json();
    //
    // console.log(apiData)
    // console.log(apiData.data.cards[5].card.card);
    //optional chaining
    // console.log(   apiData.data.cards[4].card.card.gridElements?.infoWithStyle
    //   .restaurants)
    setListOfRestraunts(
      apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)

      };
      // console.log(listOfRestraunts)
  // ok its fine i just assigned the listof restro. to the set variable of the reset search button so that 
  //(the f here !! down here `), its solved actually i used setFilteredRestaurants here!!
  const resetSearch = ()=>{
     setSearchText('');
     console.log("setted!")
     setFilteredRestaurants(listOfRestraunts);
    console.log("dom is not updating");}
  //also called conditional Rendering
  //without conditional rendering 
  


  if (onlineStatus===false)
  return(
    <h1>Looks like you're offline, check your internet connections please!</h1>
    )
  if(listOfRestraunts.length === 0 ){
    return <Shimmer />
  }
  return(
    <div className="body ">
      <div className="flex">
        <div className="search m-6 p-2 ">
          <input
            type="text"
            className="border border-solid hover:border-black hover:shadow-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 m-4 bg-red-500 hover:bg-red-400 hover:shadow-lg active:bg-green-400 rounded-lg"
            onClick={() => {
              const newList = listOfRestraunts.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurants(newList)
            }}
          >
            Search
          </button>
          <button className="px-4 m-2 bg-red-500 hover:bg-red-400 hover:shadow-lg active:bg-green-400 rounded-lg" onClick={resetSearch}>
            Reset Search 
          </button>  

        <button
          className=" px-4 m-2  hover:bg-red-300 hover:border-black hover:shadow-lg border-black"
          onClick={() => {
            filteredList = listOfRestraunts.filter((res) => {
              return res.info.avgRating > 4.1;
            });
            console.log(filteredList);
            setFilteredRestaurants(filteredList);
          }}
        >
          Today's Top Restraunts
        </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurants.map((restraunt) => (
          <Link to= {"restaurants/"+restraunt.info.id}><RestroCard key={restraunt.info.id} resData={restraunt} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
