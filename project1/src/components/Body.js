import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import refList from "../utils/mockData";

const Body = () => {
  // Move useState inside the functional component
  const [listofRestaurants, setListofRestaurants] = useState(refList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter((res) => res.info.avgRating > 4.4 );
            setListofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listofRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
