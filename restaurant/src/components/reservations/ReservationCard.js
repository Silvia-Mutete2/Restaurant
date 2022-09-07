import React from "react"

const ReservationCard = () => {
    
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
}
  





export default ReservationCard