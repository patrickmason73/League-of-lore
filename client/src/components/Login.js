import React, { useState, useContext } from "react";
import { UserContext } from "./contexts/UserContext";


function Login() {
    const {setCurrentUser} = useContext(UserContext)

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
                    setErrors([])
                });
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        });
    }


    return (
        <div style={{padding: "10px", backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)"}}>
            <form onSubmit={handleSubmit} style={{padding: "10px", display: 'block'}}>
                <label style={{padding: '5px', margin: '5px', display: "block", fontSize: "120%"}}>
                   <b> Username: </b>
                    <input
                     type="text"
                     id="username"
                     style={{color: "white", backgroundColor: "black"}}
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label style={{padding: '5px', margin: '5px', display: "block", fontSize: "120%"}}>
                   <b style={{paddingRight: "3px"}}> Password:  </b>
                    <input 
                     type="password"
                     id="password"
                     style={{color: "white", backgroundColor: "black"}}
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />

                <button type="submit" className="button-64" style={{marginLeft: "100px"}}><span style={{fontWeight: "800", padding: "6px", paddingInline: "24px"}}>Login</span></button>
                <ul style={{listStyle: "none"}}>{errors && errors.map((err) => (
                    <li key={err} style={{fontWeight: "700"}}><u>ERROR:</u> {err}</li>
            ))}</ul>
            </form>
        </div>
    )
}

export default Login;