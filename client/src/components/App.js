import React, { useEffect, useState, useContext } from "react";
import {Routes, Route, useNavigate } from 'react-router-dom';
import { UserContext } from "./contexts/UserContext";
import Navbar from "./Navbar";
import Home from "./Home";
import Signup from "./Signup";
import UserProfile from "./UserProfile";
import Login from "./Login";
import Search from "./Search";
import UserPosts from "./UserPosts";
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; 
}


function App() {

 const {currentUser, setCurrentUser} = useContext(UserContext)
 const navigate = useNavigate();
 const [champions, setChampions] = useState([])
 const [searchText, setSearchText] = useState("")
 const [userPosts, setUserPosts] = useState([])


 useEffect(() => {
    fetch('/champions')
    .then((res) => res.json())
    .then((data) => {
        setChampions(data)
        console.log(data)
    })
 }, [])

 useEffect(() => {
  fetch('/user_posts')
  .then((res) => res.json())
  .then((data) => {
      setUserPosts(data)
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
  
 function handleSignUp(username, password, passwordConfirmation, displayName, profilePic, bio, email, setErrors) {
    
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
                email,
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

   function handleAddComment(newComment, champion, setErrors, setDisplay) {
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
            setDisplay(true)
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
            
          }
      })
      }

      function handleCommentUpdate(newComment, champId, comment, setErrors, setEditing) {
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
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
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
        setEditing(false)
        setErrors([])
      })}
        else {r.json().then((err) => setErrors(err.errors))}
      }
    )}

    function addUserPost(title, content, imgURL, currentUser, setErrors, setCreating) {
        fetch("/user_posts", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            img_url: imgURL,
            capstone_user: {currentUser},
          }),
        }).then((res) => {
          if (res.ok) {
            res.json().then((data) => {
              setUserPosts([data, ...userPosts])
              setCreating(false)
              setErrors([])
              navigate("/posts")
            })
          } else {
            res.json().then((err) => setErrors(err.errors))
          }
        })
      }  

      function handleAddPostComment(newComment, post, setErrors) {
        const postToUpdate = userPosts.find((item) => item.id === post.id)
        fetch("/post_comments", {
         method: "POST",
         headers: {
          "Content-type": "application/json",
         },
         body: JSON.stringify({
          content: newComment,
          capstone_user_id: currentUser.id,
          user_post_id: post.id,
         }),
        }
       ).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            const updatedPosts = userPosts.map((post) => {
              if (post === postToUpdate)
              return {
                ...postToUpdate,
                post_comments: [data, ...postToUpdate.post_comments],
              }
              else {return post}
            })
            setUserPosts(updatedPosts)
            setErrors([])
          })
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
       })
      }

      function handleDeletePostComment(commentToDelete, postId) {
        const postToUpdate = userPosts.find((post) => post.id === postId)
        fetch(`/post_comments/${commentToDelete.id}`, {
          method: "DELETE",
      }).then((res) => {
          if (res.ok) {
            const updatedPosts = userPosts.map((post) => {
              if (post === postToUpdate)
              return {
                ...postToUpdate,
                post_comments: post.post_comments.filter((comment) => {
                  return comment.id !== commentToDelete.id
                })
              }
              else {return post}
            })
            setUserPosts(updatedPosts)
          }
      })
      }

      function handlePostCommentUpdate(newComment, postId, comment, setErrors, setEditing) {
        const postToUpdate = userPosts.find((post) => post.id === postId)
        fetch(`/post_comments/${comment.id}`, {
          method: "PATCH", 
          headers: {
              "Content-type" : "application/json",
          },
          body: JSON.stringify({
              content: newComment,
          }),
      })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
        const updatedPosts = userPosts.map((post) => {
          if (post === postToUpdate)
          return {
            ...postToUpdate,
            post_comments: post.post_comments.map((comment) => {
              if (comment.id === data.id) {
                return data;
            }
            else {
                return comment;
            }
            })
          }
          else {return post}
        })
        setUserPosts(updatedPosts)
        setEditing(false)
        setErrors([])
      }) 
      } else {r.json().then((err) => setErrors(err.errors))}
    })}

      function updateUser(newName, newBio, newProfilePic, setErrors, setEditingName) {
        fetch(`/capstone_users/${currentUser.id}`, {
          method: "PATCH",
          headers: {
              "Content-type": "application/json",
             },
             body: JSON.stringify({
              display_name: newName,
              bio: newBio,
              profile_pic: newProfilePic,
             }),
      }).then((res) => {
          if (res.ok) {
              res.json().then((user) => {
                  setCurrentUser(user)
                  const updatedPosts = userPosts.map((post) => {
                      if (post.capstone_user.id === currentUser.id) {
                        return {
                          ...post,
                          capstone_user: user,
                        }
                      }
                      else {return post}
                  })
                  setUserPosts(updatedPosts)

                  const updatedChampions = champions.map((champ) => {
                   return {...champ, 
                    champion_comments: champ.champion_comments.map((comment) => {
                      if (comment.capstone_user_id === currentUser.id) {
                        return {
                          ...comment,
                          capstone_user: user,
                        }
                      }
                      else {return comment}
                    })
              }}) 
                  setChampions(updatedChampions)
                  setEditingName(false)
                  setErrors([])
              });
          } else {
              res.json().then((err) => setErrors(err.errors))
          }
      });
      }


    return (
        <div>
           <ScrollToTop />
         <Navbar logout={logout} navigate={navigate}/>
         <div style={ currentUser ? {width: "100%", height: "127px", backgroundColor: "black"} : {width: "100%", height: "95px", backgroundColor: "black"}}></div>

         <Routes>
         <Route path="/*" element={
           <>
         <Home champions={champions} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment} handleCommentUpdate={handleCommentUpdate} navigate={navigate}/>
         </>
         }>
         </Route> 
      
         <Route path="/signup" element={
          <>
         <Signup handleSignUp={handleSignUp} navigate={navigate}/>
          </>
         }>
         </Route>
         <Route path="/login" element={
          <>
            {currentUser ? <UserProfile champions={champions} userPosts={userPosts} updateUser={updateUser} /> : <Login />}
          </>
         }>

         </Route>
         <Route path="/posts" element={<UserPosts userPosts={userPosts} addUserPost={addUserPost} handleAddPostComment={handleAddPostComment} handlePostCommentUpdate={handlePostCommentUpdate} handleDeletePostComment={handleDeletePostComment}/>}>

         </Route>
         <Route path="/search" element={
          <>
         <Search champions={champions} handleAddComment={handleAddComment} searchText={searchText} setSearchText={setSearchText} handleDeleteComment={handleDeleteComment} handleCommentUpdate={handleCommentUpdate}/>
         </>
         }>
         </Route>
         </Routes>
        </div>
    )
}

export default App;