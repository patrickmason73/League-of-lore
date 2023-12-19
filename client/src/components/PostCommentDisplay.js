import React, { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";


function PostCommentDisplay({ post, comment, handlePostCommentUpdate, handleDeletePostComment }) {
    const {currentUser} = useContext(UserContext)
    const [editing, setEditing] = useState(false)
    const [newComment, setNewComment] = useState()
    const [errors, setErrors] = useState([])

    const commentUser = comment.capstone_user

    function handleCommentSubmit(e, comment) {
        e.preventDefault();
        handlePostCommentUpdate(newComment, post.id, comment, setErrors, setEditing)
     }

    return (
     <div>
        <article style={{backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)", borderStyle: "groove", margin: "10px", borderColor: "black", textAlign: "left"}}>
           <h1 style={{borderStyle: "groove", borderColor: "black", width: "fit-content", marginLeft: "5px", padding: "3px"}}>{commentUser.display_name}<img src={commentUser.profile_pic} alt="user_pfp" style={{float: "left", height: "21px", width: "21px"}}/></h1>
           <p style={{textAlign: "left", fontWeight: "600", marginLeft: "15px"}}>{comment.content}</p>
           {(currentUser !== null && currentUser.id === commentUser.id) && <button className="button-64" style={{marginLeft: "20px", marginBottom: "10px"}} onClick={() => handleDeletePostComment(comment, post.id)}><span >Delete Comment</span></button>}
           {(currentUser !== null && currentUser.id === commentUser.id) && <button className="button-64" style={{marginLeft: "20px", marginBottom: "10px"}} onClick={() => {setEditing(current => !current); setNewComment(comment.content)}}><span >{editing ? "Cancel" : "Edit Comment"}</span></button>}
           {editing ? 
                   <form onSubmit={(e) => handleCommentSubmit(e, comment)}>
                           <label>
                               <h4 style={{marginLeft: "10px"}}>Comment:</h4>
                               <textarea 
                                   style={{marginLeft: "20px", backgroundColor: "black", color: "white"}}
                                   rows="10"
                                   cols="70"
                                   type="text"
                                   id="newComment"
                                   value={newComment}
                                   onChange={(e) => setNewComment(e.target.value)}
                               />
                           </label>
                           <br/>
                           <button type="submit" className="button-64" style={{marginLeft: "20px", marginBottom: "10px"}}><span>Update Comment</span></button>
                           <ul style={{listStyle: "none"}}>{errors && errors.map((err) => (
                            <li key={err} style={{fontWeight: "700"}}><u>ERROR:</u>{err}</li>
                        ))}</ul>
                   </form>
                       : null}
        </article>
     </div> 
    )
}


export default PostCommentDisplay;