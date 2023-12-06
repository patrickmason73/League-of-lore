import React, { useEffect, useState, useContext } from "react";
import {Routes, Route, useNavigate } from 'react-router-dom';
import { UserContext } from "./contexts/UserContext";
import Navbar from "./Navbar";
import Home from "./Home";
import Signup from "./Signup";
import UserProfile from "./UserProfile";
import Login from "./Login";
import Search from "./Search";



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

      function handleAddComment(newComment, champion) {
        const championToUpdate = champions.find((champ) => champ.id === champion.id)
        fetch("/champion_comments", {
         method: "POST",
         headers: {
          "Content-type": "application/json",
         },
         body: JSON.stringify({
          content: newComment,
          capstone_user_id: currentUser.id,
          champion_id: champion.id,
         }),
        }
       ).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            const updatedChampions = champions.map((champion) => {
              if (champion === championToUpdate)
              return {
                ...championToUpdate,
                champion_comments: [...championToUpdate.champion_comments, data],
                capstone_users: [...championToUpdate.capstone_users, currentUser]
              }
              else {return champion}
            })
            setChampions(updatedChampions)
            setErrors([])
          })
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
       })
      }


    return (
        <div>
           
         <Navbar logout={logout}/>
         <div style={ currentUser ? {width: "100%", height: "127px", backgroundColor: "black", borderStyle: "groove"} : {width: "100%", height: "95px", backgroundColor: "black", borderStyle: "groove"}}></div>

         <Routes>
         <Route path="/*" element={
           <>
         <Home champions={champions} handleAddComment={handleAddComment}/>
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
         <Route path="/search/:name" element={<Search />}>

         </Route>
         </Routes>
        </div>
    )
}

export default App;