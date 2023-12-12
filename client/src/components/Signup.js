import React, { useState } from "react"



function Signup ({ errors, handleSignUp, navigate }) {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const [bio, setBio] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        handleSignUp(username, password, passwordConfirmation, displayName, profilePic, bio)
    }

    return (
        <form onSubmit={handleSubmit} style={{textAlign: "center", backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)", paddingBottom: "55px", paddingTop: "5px"}}>
        <span>Already Have An Account? <u style={{cursor: "pointer", fontWeight: "500"}} onClick={() => navigate("/login")}>Log in</u></span>
            <label>
               <h3>Username:
               <input 
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{margin: "5px"}}
                />
               </h3>
                
            </label>
            <label>
                <h3>Password:
                <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{margin: "5px"}}
                />
                </h3>
              
            </label>
            <label>
               <h3>Password Confirmation:
               <input 
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                style={{margin: "5px"}}
                />
               </h3>

            </label>
            <br />
            <label>
                <b>Display Name</b> - This Is The Name Other Users Will See
                <input 
                type="text"
                id="display_name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                style={{margin: "5px"}}
                />
            </label>
            <br />
            <label>
            <p> <b style={{fontSize: "115%"}}>Bio:</b>  Write A Little About Yourself (Max 1000 Characters)   </p>
                 <textarea 
                 rows="12"
                 cols="80"
                 type="text"
                 id="content"
                 value={bio}
                 onChange={(e) => setBio(e.target.value)}
                 style={{margin: "5px"}}
                 />
         

            </label>
            <br />
            <label>
               <b>Profile Picture URL:</b> 
                <input 
                type="text"
                id="profilePic"
                value={profilePic}
                style={{width:"400px", margin: "5px"}}
                onChange={(e) => setProfilePic(e.target.value)}
                />
            </label>
            <br />
            <button className="button-9" type="submit">CREATE ACCOUNT</button>
            <ul>{errors && errors.map((err) => (
                <li key={err}>{err}</li>
            ))}</ul>
        </form>
    )

}

export default Signup