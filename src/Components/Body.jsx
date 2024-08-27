import RestroCard from "./RestroCard";
// import resList from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  //
  //console.log(useState())
  // state Variables
  //this is array destructuring on the fly ^^^^^
  //like this.
  // const arr = useState([])
  // const[listOfRestraunts, setListOfRestraunts] = arr

  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

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
        ?.restaurants
    );
  };
  //
  console.log(listOfRestraunts);
  // ok its fine i just assigned the listof restro. to the set variable of the reset search button so that
  //(the f here !! down here `), its solved actually i used setFilteredRestaurants here!!
  const resetSearch = () => {
    setSearchText("");
    console.log("setted!");
    setFilteredRestaurants(listOfRestraunts);
    console.log("dom is not updating");
  };
  //also called conditional Rendering

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline, check your internet connections please!
      </h1>
    );
  if (listOfRestraunts.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="flex items-start justify-start">
        <div className="search m-6 p-2 ">
          <input
            type="text"
            className="border border-solid
             hover:border-black bg-transparent hover:shadow-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 m-4 hover:bg-gray-400 hover:shadow-lg active:bg-purple-400 rounded-lg"
            onClick={() => {
              const newList = listOfRestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(newList);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-normal mb-5 box-border">
        <button
          className=" px-4 m-2 bg-purple-300 hover:bg-purple-700 hover:border-black hover:shadow-lg border-black"
          onClick={() => {
            const filteredList = listOfRestraunts.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            // console.log(filteredList);
            setFilteredRestaurants(filteredList);
          }}
        >
          Today's Top Restraunts
        </button>
        <button
          className="px-4 m-4 hover:shadow-lg active:bg-purple-400 rounded-lg"
          onClick={resetSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 26"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-wrap ">
        {filteredRestaurants.map((restraunt) => (
          <Link to={"restaurants/" + restraunt.info.id}>
            <RestroCard key={restraunt.info.id} resData={restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
