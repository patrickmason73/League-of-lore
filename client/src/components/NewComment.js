import React, { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import CommentDisplay from "./CommentDisplay";


function NewComment({ champion, handleAddComment, handleDeleteComment, handleCommentUpdate, navigate }) {
const {currentUser} = useContext(UserContext)
const [text, setText] = useState("")


 function handleSubmit(e) {
    e.preventDefault();
    handleAddComment(text, champion)
    setText("")
 }

 

 

 const displayChampComments = champion.champion_comments.map((comment) => {
    return (
        <div key={comment.id}>
        <CommentDisplay comment={comment} champion={champion} handleDeleteComment={handleDeleteComment} handleCommentUpdate={handleCommentUpdate} />
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
                    style={{backgroundColor: "black", color: "white", borderStyle: "groove", borderRadius: "10px", borderWidth: "2px"}}
                    type="text"
                    id="newComment"
                    rows="10"
                    cols="70"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit" className="button-64" ><span>Post Comment</span></button>
            </form>
        : <b style={{textDecoration: "underline", cursor: "pointer", fontSize: "120%", color: "blue", WebkitTextStroke: "0.3px black"}} onClick={() => navigate("/signup")}>Log in or sign up to comment!</b>} 
        </div>
        <div style={{borderStyle: "groove", margin: "5px", backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)", borderColor: "black"}}>
        <h3 style={{marginLeft: "10px", fontSize: "150%", color: "antiquewhite", WebkitTextStroke: "1.2px black"}}>User Comments:</h3>
        {displayChampComments}
        </div>
     </div>

    )
}


export default NewComment