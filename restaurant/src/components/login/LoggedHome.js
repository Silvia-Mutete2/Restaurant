const LoggedHome = ({loggedInGuest}) => {
    return (
      <div>
        <h2>Welcome, {loggedInGuest.name}</h2>
        <p>Use the tabs above to find restaurants, make reservations, and view your reservations.</p>
      </div>
    )
  }
  
  export default LoggedHome
  