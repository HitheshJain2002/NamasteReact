import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {
      cloudinaryImageId,
      name,cuisines,costForTwo,deliveryTime,avgRatingString
    
    
    
    }=resData?.info;
      return (
        <div className="res-card" >
          <h3>{name}</h3>
          <div className="res-img">
            <img
            
              src={`${CDN_URL}${cloudinaryImageId}`}
              alt="Restaurant"
            />
          </div>
          <p>{cuisines.join(", ")}</p>
          <h4>{costForTwo} </h4>
       <h4>{avgRatingString}</h4>
          <h4>{resData.deliveryTime}</h4>
        </div>
      );
    };
    export default RestaurantCard;
     