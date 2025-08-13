import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const apiData = await data.json();
    const restaurants =
      apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestraunts(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const resetSearch = () => {
    setSearchText("");
    setFilteredRestaurants(listOfRestraunts);
  };

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-red-500 font-semibold text-lg mt-10">
        Looks like you're offline, please check your internet connection!
      </h1>
    );

  if (listOfRestraunts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white shadow-sm w-64"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="button"
          className="px-4 py-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg shadow-md hover:shadow-lg hover:from-purple-500 hover:to-blue-400 transition-all"
          onClick={() => {
            const newList = listOfRestraunts.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(newList);
          }}
        >
          Search
        </button>
        <button
          className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg shadow-sm transition-all"
          onClick={resetSearch}
          title="Reset search"
        >
          🔄 Reset
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <button
          className="px-4 py-2 bg-purple-300 hover:bg-purple-500 text-white rounded-lg shadow-sm transition-all"
          onClick={() => {
            const filteredList = listOfRestraunts.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          ⭐ Today's Top Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-6">
        {filteredRestaurants.map((restraunt) => (
          <Link
            key={restraunt.info.id}
            to={"restaurants/" + restraunt.info.id}
            className="hover:scale-[1.02] transition-transform"
          >
            <RestroCard resData={restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
