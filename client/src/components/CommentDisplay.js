import React, { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";

function CommentDisplay({ comment, champion, handleDeleteComment, handleCommentUpdate }) {
    const {currentUser} = useContext(UserContext)
    const [editing, setEditing] = useState(false)
    const [newComment, setNewComment] = useState()

    const commentUser = champion.capstone_users.find((user) => {if (user !== null) {return (user.id === comment.capstone_user_id)} else {return null}})

    function handleCommentSubmit(e, comment) {
        e.preventDefault();
        handleCommentUpdate(newComment, champion.id, comment)
        setEditing(false)
     }

    return (
        <div  key={comment.id}>
            {commentUser !== null ?
        <article style={{backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)", borderStyle: "groove", margin: "10px", borderColor: "black"}}>
           
            <h1 style={{borderStyle: "groove", borderColor: "black", width: "fit-content", marginLeft: "5px", padding: "3px"}}>{commentUser.display_name}<img src={commentUser.profile_pic} alt="user_pfp" style={{float: "left", height: "21px", width: "21px"}}/></h1>
            
            <p style={{float: "bottom", fontWeight: "500", marginLeft: "15px"}}>{comment.content}</p>
            {(currentUser !== null && currentUser.id === commentUser.id) && <button className="button-64" style={{marginLeft: "20px", marginBottom: "10px"}} onClick={() => handleDeleteComment(comment, champion.id)}><span >Delete Comment</span></button>}
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
                            <button type="submit" className="button-64" style={{marginLeft: "20px", marginBottom: "10px"}}><span class="text">Update Comment</span></button>
                    </form>
                        : null}
        </article>
            : null}
        </div>
    )
}


export default CommentDisplay;