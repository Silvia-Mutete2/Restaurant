import ReservationCard from './ReservationCard'

const ReservationList = ({ loggedInGuest, onDeleteReservation, onUpdateReservation }) => {

  console.log("loggedInGuest in reservation list", loggedInGuest)

  if (loggedInGuest.reservations.length > 0) {
    return (
      <div>
        <h3>{loggedInGuest.name}'s Reservations</h3>
        {loggedInGuest.reservations.map((reservation) => <ReservationCard loggedInGuest={loggedInGuest} reservation={reservation} key={reservation.id} onDeleteReservation={onDeleteReservation} onUpdateReservation={onUpdateReservation}/>)}
      </div>
    )
  } else {
    return (
      <h3><em>You have no reservations</em></h3>
    )
  }

  
}

export default ReservationList