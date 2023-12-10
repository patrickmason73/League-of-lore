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
 const [searchText, setSearchText] = useState("")


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
                champion_comments: [data, ...championToUpdate.champion_comments],
                capstone_users: [currentUser, ...championToUpdate.capstone_users],
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

      function handleDeleteComment(commentToDelete, champId) {
        const championToUpdate = champions.find((champ) => champ.id === champId)
        fetch(`/champion_comments/${commentToDelete.id}`, {
          method: "DELETE",
      }).then((res) => {
          if (res.ok) {
            const updatedChampions = champions.map((champ) => {
              if (champ === championToUpdate)
              return {
                ...championToUpdate,
                champion_comments: champ.champion_comments.filter((comment) => {
                  return comment.id !== commentToDelete.id
                }),
                capstone_users: champ.capstone_users.filter((user) => {
                 const champComments = champ.champion_comments.filter((comment) => {
                  return comment.id !== commentToDelete.id
                })
                  if (champComments.find((e) => e.capstone_user_id === user.id)) { 
                    return user
                  }
                  else {return null}
                })
              }
              else {return champ}
            })
            setChampions(updatedChampions)
            setErrors([])
          }
          else {res.json().then((err) => setErrors(err.errors))}
      })
      }

      function handleCommentUpdate(newComment, champId, comment) {
        const championToUpdate = champions.find((champ) => champ.id === champId)
        fetch(`/champion_comments/${comment.id}`, {
          method: "PATCH", 
          headers: {
              "Content-type" : "application/json",
          },
          body: JSON.stringify({
              content: newComment,
          }),
      })
      .then((r) => r.json())
      .then((data) => {
        const updatedChampions = champions.map((champ) => {
          if (champ === championToUpdate)
          return {
            ...championToUpdate,
            champion_comments: champ.champion_comments.map((comment) => {
              if (comment.id === data.id) {
                return data;
            }
            else {
                return comment;
            }
            })
          }
          else {return champ}
        })
        setChampions(updatedChampions)
      })
        
      }


    return (
        <div>
           
         <Navbar logout={logout} navigate={navigate}/>
         <div style={ currentUser ? {width: "100%", height: "127px", backgroundColor: "black"} : {width: "100%", height: "95px", backgroundColor: "black"}}></div>

         <Routes>
         <Route path="/*" element={
           <>
         <Home champions={champions} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment}/>
         </>
         }>
         </Route> 
         <Route path="/signup" element={
          <Signup handleSignUp={handleSignUp} errors={errors}/>
         }>
         </Route>
         <Route path="/login" element={
          <>
            {currentUser ? <UserProfile champions={champions}/> : <Login />}
          </>
         }>

         </Route>
         <Route path="/search" element={
          <>
         <Search champions={champions} handleAddComment={handleAddComment} searchText={searchText} setSearchText={setSearchText} handleDeleteComment={handleDeleteComment}/>
         </>
         }>
         </Route>
         </Routes>
        </div>
    )
}

export default App;