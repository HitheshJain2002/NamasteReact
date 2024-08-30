import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {
      cloudinaryImageId,
      name,cuisines,costForTwo,deliveryTime
    
    
    
    }=resData?.info;
      return (
        <div className="res-card" >
          <h3>{name}</h3>
          <div className="res-img">
            <img
            
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
              alt="Restaurant"
            />
          </div>
          <p>{cuisines.join(", ")}</p>
          <h4>{costForTwo} </h4>
          <h4>{resData.deliveryTime}</h4>
        </div>
      );
    };
    export default RestaurantCard;
     