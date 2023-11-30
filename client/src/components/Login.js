import React, { useState, useContext } from "react";
import { UserContext } from "./contexts/UserContext";


function Login() {
    const {currentUser, setCurrentUser} = useContext(UserContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user)
                    console.log(user)
                });
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        });
    }


    return (
        <>
            <form onSubmit={handleSubmit} style={{padding: "10px"}}>
                <label>
                   <b> Username: </b>
                    <input
                     type="text"
                     id="username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label>
                   <b> Password: </b>
                    <input 
                     type="password"
                     id="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />

                <button type="submit">Login</button>
                <ul>
                    {errors.map((error) => (
                        <li key={error.id}>{error}</li>
                    ))}
                </ul>
            </form>
        </>
    )
}

export default Login;