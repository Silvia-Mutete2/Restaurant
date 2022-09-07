import { React, useState } from "react"

const LoginHome = () => {
    

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
                    <input type="text" name="name" value={newGuest.name} onChange={handleInputChange} />
                </label>
                <label>Username
                    <input type="text" name="username" value={newGuest.username} onChange={handleInputChange} />
                </label>
                <label>Password
                    <input type="text" name="password" value={newGuest.password} onChange={handleInputChange} />
                </label>
                <button type="submit" >Create account</button>
            </form>
        </div>
    )
}
export default LoginHome