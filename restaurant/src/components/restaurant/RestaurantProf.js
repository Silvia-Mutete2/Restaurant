import { useParams } from "react-router-dom"
import { useState } from "react"


const RestaurantProf = ({ restaurants, loggedInGuest, addNewReservation }) => {
  let params = useParams()

  const selectedRestaurant = restaurants.filter(restaurant => restaurant.id == params.id)[0]
  
  let blankReservationTemplate = {
    date: "",
    time: "",
    number_of_guests: "",
    restaurant_id: selectedRestaurant.id,
    guest_id: loggedInGuest.id,
  }

  const [newReservation, setNewReservation] = useState(blankReservationTemplate)

  const updatedGuestProfile = { ...loggedInGuest }
  
  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value 
    setNewReservation({ ...newReservation, [name]: value })
  }

  const handleNewReservation = (e) => {
    e.preventDefault()
    fetch('http://localhost:9292/reservations', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({reservation: newReservation}),
    })
      .then(r => r.json())
    
    .then(newRes => { newRes.restaurant = selectedRestaurant 
      updatedGuestProfile.reservations = [...updatedGuestProfile.reservations, newRes]
      })

    console.log("updated Guest Profile", updatedGuestProfile)
    addNewReservation(updatedGuestProfile)
    setNewReservation(blankReservationTemplate)
  }
  
    return (
      <div>
        <h2>Make a Reservation at:</h2>
        <h3>{selectedRestaurant.restaurant_name}</h3>

        <form onSubmit={handleNewReservation}>
          <label>  Date
            <input type="text" name="date" value={newReservation.date} onChange={handleInputChange} />
          </label>
          <label> Time
            <input type="text" name="time" value={newReservation.time} onChange={handleInputChange} />
          </label>
          <label> Number of Guests
            <input type="text" name="number_of_guests" value={newReservation.number_of_guests} onChange={handleInputChange} />
          </label>
          <button type="submit">Make a Reservation</button>
        </form>

      </div>

    )
}

export default RestaurantProf