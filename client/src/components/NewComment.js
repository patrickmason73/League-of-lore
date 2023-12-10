import React, { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";


function NewComment({ champion, handleAddComment, handleDeleteComment, handleCommentUpdate }) {
const {currentUser} = useContext(UserContext)
const [text, setText] = useState("")
const [editing, setEditing] = useState(false)
const [newComment, setNewComment] = useState()

 function handleSubmit(e) {
    e.preventDefault();
    handleAddComment(text, champion)
    setText("")
 }

 function handleCommentSubmit(e, comment) {
    e.preventDefault();
    handleCommentUpdate(newComment, champion.id, comment)
    setEditing(false)
 }

 

 const displayChampComments = champion.champion_comments.map((comment) => {
    const commentUser = champion.capstone_users.find((user) => {if (user !== null) {return (user.id === comment.capstone_user_id)} else {return null}})
    return (
        <div  key={comment.id}>
            {commentUser !== null ?
        <article style={{backgroundColor: "lightgray", borderStyle: "groove", margin: "10px"}}>
           
            <h1 style={{borderStyle: "groove", width: "fit-content", marginLeft: "5px"}}>{commentUser.display_name}<img src={commentUser.profile_pic} alt="user_pfp" style={{float: "left", height: "21px", width: "21px"}}/></h1>
            
            <p style={{float: "bottom", fontWeight: "500", marginLeft: "5px"}}>{comment.content}</p>
            {(currentUser !== null && currentUser.id === commentUser.id) && <button onClick={() => handleDeleteComment(comment, champion.id)}>Delete Comment</button>}
            {(currentUser !== null && currentUser.id === commentUser.id) && <button onClick={() => {setEditing(current => !current); setNewComment(comment.content)}}>{editing ? "Cancel" : "Edit Comment"}</button>}
            {editing ? 
                    <form onSubmit={(e) => handleCommentSubmit(e, comment)}>
                            <label>
                                <h4>Comment:</h4>
                                <textarea 
                                    rows="10"
                                    cols="70"
                                    type="text"
                                    id="newComment"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                />
                            </label>
                            <br/>
                            <button type="submit">UPDATE COMMENT</button>
                    </form>
                        : null}
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
        : <b style={{textDecoration: "underline"}}>Log in or sign up to comment!</b>} 
        </div>
        <div style={{borderStyle: "groove", margin: "5px", backgroundColor: "blanchedalmond"}}>
        <h3 style={{marginLeft: "10px", fontSize: "150%"}}>User Comments:</h3>
        {displayChampComments}
        </div>
     </div>

    )
}


export default NewComment