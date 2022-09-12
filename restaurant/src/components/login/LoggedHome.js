const LoggedHome = ({loggedInGuest}) => {
    return (
      <div>
        <h2>Welcome, {loggedInGuest.name}</h2>
        <p>To find restaurants and make reservations use the tabs above.</p>
      </div>
    )
  }
  
  export default LoggedHome
  