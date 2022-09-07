import {Link} from "react-router-dom"

const RestaurantCard = ({restaurant, isLoggedIn}) => {
 
  return (
    <div>
      <img src={restaurant.image_url} alt="restaurant image" width="200" height="200"/>
      <h3>{restaurant.restaurant_name}</h3>
      <p>{restaurant.cuisine_type}</p>
      {isLoggedIn ? <Link to={"/restaurants/" + restaurant.id}>Make a Reservation</Link> : <p><em>Please log in to make a reservation!</em></p>}
    </div>
     )
}

export default RestaurantCard