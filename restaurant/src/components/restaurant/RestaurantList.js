import RestaurantCard from './RestaurantCard'

const RestaurantList = ({restaurants, isLoggedIn}) => {
    return (
    <div>
      <h2>Our Restaurants</h2>
      {restaurants.map(restaurant => <RestaurantCard restaurant={restaurant} isLoggedIn={isLoggedIn} key={restaurant.id}/>)}
    </div>
    )
}

export default RestaurantList