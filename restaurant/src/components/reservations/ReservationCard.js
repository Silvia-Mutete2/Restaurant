import { useState } from "react"

const ReservationCard = ({ reservation, onDeleteReservation, onUpdateReservation }) => {
  const [toggleUpdateReservation, setToggleUpdateReservation] = useState(false)
  const [updatedReservation, setUpdatedReservation] = useState(reservation)

  const handleDelete = (reservation) => {
    fetch(`https://restaurant-backend2.herokuapp.com//reservations/${reservation.id}`, {
      method: "DELETE",
    })
      .then(() => onDeleteReservation(reservation.id))
  }

  const handleUpdateReservationClick = () => {
    setToggleUpdateReservation(() => !toggleUpdateReservation)
  }

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    setUpdatedReservation({ ...updatedReservation, [name]: value })
}

  const updateReservation = (e) => {
    e.preventDefault()
    console.log("update")
    fetch(`https://restaurant-backend2.herokuapp.com/reservations/${reservation.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"reservation": {time: updatedReservation.time, date: updatedReservation.date, number_of_guests: updatedReservation.number_of_guests}}),
    })
      .then(r => r.json())

    setToggleUpdateReservation(!toggleUpdateReservation)
    onUpdateReservation(updatedReservation)
  }

  if (reservation.restaurant) {
  return (
    <div>
      <img src={reservation.restaurant.image_url} width="100" height="100" alt="restaurant" />
      <h4>{reservation.restaurant.restaurant_name}</h4>
      <p>date: {reservation.date}</p>
      <p>time: {reservation.time}</p>
      <p>Number of guests: {reservation.number_of_guests}</p>
      <button onClick={() => handleDelete(reservation)}>Cancel Reservation</button>
      <button onClick={() => handleUpdateReservationClick(reservation)}>Update Reservation</button>
      {toggleUpdateReservation ?

        <form onSubmit={(e) => updateReservation(e)}>
          <label> Reservation Date
            <input type="text" name="date" value={updatedReservation.date} onChange={handleInputChange} />
          </label>
          <label> Reservation Time
            <input type="text" name="time" value={updatedReservation.time} onChange={handleInputChange} />
          </label>
          <label> Number of Guests
            <input type="text" name="number_of_guests" value={updatedReservation.number_of_guests} onChange={handleInputChange} />
          </label>
          <button type="submit">Submit Reservation Update</button>
        </form> : null}
    </div>
  )
      } else {
        <div></div>
      }

}




export default ReservationCard