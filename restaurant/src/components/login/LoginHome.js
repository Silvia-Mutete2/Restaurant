import { React, useState } from "react"

const LoginHome= ({ guests, setIsLoggedIn, currentGuestId, setCurrentGuestId, setLoggedInGuest, onAddNewGuest }) => {
    const guestOptions = guests.map(guest => {
        return { label: guest.name, value: guest.id }
    })
    const blankGuestTemplate = {
        username: "",
        password: "",
        name: ""
    }
    const [newGuest, setNewGuest] = useState(blankGuestTemplate)

    function compare(a, b) {
        if (a.label < b.label) {
            return -1;
        }
        if (a.label > b.label) {
            return 1;
        }
        return 0;
    }
    guestOptions.sort(compare);


    const handleDropdownChange = (event) => {
        setCurrentGuestId(event.target.value)
    }

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)
        setNewGuest({ ...newGuest, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const guest = guests.find(guest => guest.id === Number(currentGuestId))
        setLoggedInGuest(guest)
        setIsLoggedIn(() => true)
    }

    const handleNewGuest = (e) => {
        e.preventDefault()
        console.log(newGuest)
        fetch("https://restaurant-backend2.herokuapp.com/guests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ guest: newGuest }),
        })
            .then(r => r.json())
            .then(newSubmission => {onAddNewGuest(newSubmission) 
                setLoggedInGuest(newSubmission)
                setCurrentGuestId(newSubmission.id)})
        setIsLoggedIn(true)
        setNewGuest(blankGuestTemplate)
 }

    return (
        <div>
            <h2><em>Log in below</em></h2>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    Select your name
                    <select onChange={e => handleDropdownChange(e)}> 
                        <option value="none" selected disabled hidden>Select an Option</option>
                        {guestOptions.map(option => (
                            <option value={option.value} key={option.value}>{option.label}</option>))}
                    </select>
                </label> 
                <button type="submit">login</button>
            </form>
            <h2>Create an account</h2>
            <form onSubmit={e => handleNewGuest(e)}>
                <label>Name
                    <input type="text" name="name" value={newGuest.name} onChange={handleInputChange} /> <br/> <br/>
                </label>
                <label>Username
                    <input type="text" name="username" value={newGuest.username} onChange={handleInputChange} /> <br/> <br/>
                </label>
                <label>Password
                    <input type="text" name="password" value={newGuest.password} onChange={handleInputChange} /> <br/> <br/>
                </label>
                <button type="submit" >create account</button>
            </form>
        </div>
    )
}

export default LoginHome