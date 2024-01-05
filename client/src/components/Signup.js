import React, { useState } from "react"



function Signup ({ handleSignUp, navigate }) {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const [bio, setBio] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([])


    function handleSubmit(e) {
        e.preventDefault()
        handleSignUp(username, password, passwordConfirmation, displayName, profilePic, bio, email, setErrors)
    }

    return (
        <form onSubmit={handleSubmit} style={{textAlign: "center", backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)", paddingBottom: "55px", paddingTop: "5px"}}>
        <span>Already Have An Account? <u style={{cursor: "pointer", fontWeight: "800"}} onClick={() => navigate("/login")}>Log in</u></span>
            <label>
               <h3>Username:
               <input 
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{margin: "5px", backgroundColor: "black", color: "white", borderStyle: "groove", borderRadius: "10px", borderWidth: "2px", padding: "5px"}}
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
                style={{margin: "5px", backgroundColor: "black", color: "white", borderStyle: "groove", borderRadius: "10px", borderWidth: "2px", padding: "3px"}}
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
                style={{margin: "5px", backgroundColor: "black", color: "white", borderStyle: "groove", borderRadius: "10px", borderWidth: "2px", padding: "3px"}}
                />
               </h3>

            </label>
            <label>
               <h3>Enter A Valid Email:
               <input 
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{width: "300px", margin: "5px", backgroundColor: "black", color: "white", borderStyle: "groove", borderRadius: "10px", borderWidth: "2px", padding: "5px"}}
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
                style={{margin: "5px", backgroundColor: "black", color: "white", borderStyle: "groove", borderRadius: "10px", borderWidth: "2px", padding: "5px"}}
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
                 style={{margin: "5px", backgroundColor: "black", color: "white", borderStyle: "groove", borderRadius: "10px", borderWidth: "2px", padding: "5px"}}
                 />
         

            </label>
            <br />
            <label>
               <b>Profile Picture URL (png or jpg!):</b> 
                <input 
                type="text"
                id="profilePic"
                value={profilePic}
                style={{width:"400px", margin: "5px", backgroundColor: "black", color: "white", borderStyle: "groove", borderRadius: "10px", borderWidth: "2px", padding: "5px"}}
                onChange={(e) => setProfilePic(e.target.value)}
                />
            </label>
            <br />
            <button className="button-9" type="submit">CREATE ACCOUNT</button>
            <ul style={{listStyle: "none", paddingLeft: "0px"}}>{errors && errors.map((err) => (
                <li key={err} style={{fontWeight: "700"}}><u>ERROR:</u> {err}</li>
            ))}</ul>
        </form>
    )

}

export default Signup