import React, { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";


function NewComment({ champion, handleAddComment }) {
const {currentUser} = useContext(UserContext)
const [text, setText] = useState("")

 function handleSubmit(e) {
    e.preventDefault();
    handleAddComment(text, champion)
    setText("")
 }

 

 const displayChampComments = champion.champion_comments.map((comment) => {
    const commentUser = champion.capstone_users.find((user) => {if (user !== null) {return (user.id === comment.capstone_user_id)} else {return null}})
    return (
        <div  key={comment.id}>
            {commentUser !== null ?
        <article style={{backgroundColor: "lightgray", borderStyle: "groove", margin: "10px"}}>
           
            <h1 style={{borderStyle: "groove", width: "fit-content", marginLeft: "5px"}}>{commentUser.display_name}<img src={commentUser.profile_pic} alt="user_pfp" style={{float: "left", height: "21px", width: "21px"}}/></h1>
            
            <p style={{float: "bottom", fontWeight: "500", marginLeft: "5px"}}>{comment.content}</p>
            
        </article>
            : null}
        </div>
    )
})

    return (
<div>
    
        <div style={{marginLeft: "30px", marginBottom: "10px"}}>
        {currentUser ?
            <form onSubmit={handleSubmit}>
                <label>
                    <h3>Comment Below:</h3>
                    <textarea 
                    type="text"
                    id="newComment"
                    rows="10"
                    cols="70"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Post Comment</button>
            </form>
        :"Log in or sign up to comment!"} 
        </div>
        <div style={{borderStyle: "groove", margin: "5px", backgroundColor: "blanchedalmond"}}>
        <h3 style={{marginLeft: "10px", fontSize: "150%"}}>User Comments:</h3>
        {displayChampComments}
        </div>
     </div>

    )
}


export default NewComment