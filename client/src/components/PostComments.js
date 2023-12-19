import React, { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import PostCommentDisplay from "./PostCommentDisplay";

function PostComments({ post, handleAddPostComment, handlePostCommentUpdate, handleDeletePostComment }) {
    const {currentUser} = useContext(UserContext)
    const [display, setDisplay] = useState(false)
    const [text, setText] = useState("")
    const [errors, setErrors] = useState([])

    function handleCommentSubmit(e) {
        e.preventDefault();
        handleAddPostComment(text, post, setErrors)
        setText("")
        setDisplay(true)
     }

    const comments = post.post_comments.map((comment) => {
        return (
            <div key={comment.id}>
                <PostCommentDisplay post={post} comment={comment} handleDeletePostComment={handleDeletePostComment} handlePostCommentUpdate={handlePostCommentUpdate} errors={errors}/>
            </div>
        )
    })

    return (
        <div>
            <button className="button-64" onClick={() => setDisplay((current) => !current)}><span>{display ? "Collapse Comments" : "Show Comments"}</span></button>
        
         
                        {(currentUser !== null && display === true) &&
                            <form onSubmit={handleCommentSubmit} style={{ textAlign: "left", marginLeft: "10px" }}>
                                <label>
                                    <h3>Comment Below:</h3>
                                    <textarea
                                        style={{ backgroundColor: "black", color: "white", borderStyle: "groove", borderRadius: "10px", borderWidth: "2px" }}
                                        type="text"
                                        id="newComment"
                                        rows="10"
                                        cols="70"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)} />
                                </label>
                                <br />
                                <button type="submit" className="button-64"><span>Post Comment</span></button>
                                <ul style={{listStyle: "none"}}>{errors && errors.map((err) => (
                                     <li key={err} style={{fontWeight: "700"}}><u>ERROR:</u> {err}</li>
                               ))}</ul>
                            </form>}
             {display ?
                 <div>
                  {comments.length > 0 ?
                        <div>{comments}</div>
                    :<p style={{fontWeight: "900", fontSize: "125%"}}>Be The First To Comment!</p>}
                 </div>
            :null}
        </div>
    )
}


export default PostComments;