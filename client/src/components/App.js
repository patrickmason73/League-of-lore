import React, { useEffect, useState, useContext } from "react";
import {Routes, Route, useNavigate } from 'react-router-dom';
import { UserContext } from "./contexts/UserContext";
import Navbar from "./Navbar";
import Home from "./Home";
import Signup from "./Signup";
import UserProfile from "./UserProfile";
import Login from "./Login";



function App() {

 const {currentUser, setCurrentUser} = useContext(UserContext)
 const navigate = useNavigate();
 const [errors, setErrors] = useState([])
 const [champions, setChampions] = useState([])

 useEffect(() => {
    fetch('/champions')
    .then((res) => res.json())
    .then((data) => {
        setChampions(data)
        console.log(data)
    })
 }, [])
 

 function logout() {
        fetch("/logout", {
          method: "DELETE",
        }).then((res) => {
          if (res.ok) {
            setCurrentUser(null)
            console.log(res)
          }
        })
      }
  
 function handleSignUp(username, password, passwordConfirmation, displayName, profilePic, bio) {
    
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                display_name: displayName,
                profile_pic: profilePic,
                bio,
            }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                  setCurrentUser(user)
                  setErrors([])
                  navigate("/login")
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
      }


    return (
        <div>
            <strong style={{fontSize:"150%"}}>{currentUser !== null && `Welcome back, ${currentUser.display_name}`}</strong>
            <Navbar logout={logout}/>
        
         <Routes>
         <Route path="/*" element={
           <>
         <Home champions={champions}/>
         </>
         }>
         </Route> 
         <Route path="/signup" element={
          <Signup handleSignUp={handleSignUp} errors={errors}/>
         }>
         </Route>
         <Route path="/login" element={
          <>
            {currentUser ? <UserProfile /> : <Login />}
          </>
         }>

         </Route>
         </Routes>
        </div>
    )
}

export default App;