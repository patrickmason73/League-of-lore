import React, { useState, useContext } from "react";
import { UserContext } from './contexts/UserContext';
import PostComments from "./PostComments";


function UserPosts({ userPosts, addUserPost, errors, handleAddPostComment, handlePostCommentUpdate, handleDeletePostComment }) {
    const {currentUser} = useContext(UserContext)
    const [creating, setCreating] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [imgURL, setImgURL] = useState("")
    


    function handleSubmit(e) {
        e.preventDefault();
        addUserPost(title, content, imgURL, currentUser)
    }

    const displayPosts = userPosts.map((post) => {

        return (
            <div key={post.id} style={{paddingTop: "0px"}}>
                {userPosts ? 
                    <article style={{borderStyle: "groove", borderColor: "black", borderWidth: "7px", width: "80%", textAlign: "center", marginLeft: "auto", marginRight: "auto", paddingTop: "10px", marginTop: "60px"}}>
                        <p style={{fontWeight: "800", fontSize: "130%", marginLeft: "15px", marginRight: "20px", marginTop: "20px", textShadow: "0 0 1px #FF0000, 0 0 2px #0000FF", marginBottom: "0px", textAlign: "left"}}><img src={post.capstone_user.profile_pic} alt="pfp" style={{height: "21px", width: "21px", paddingRight: "3px"}} />{post.capstone_user.display_name}</p>
                        <h1 style={{textAlign: "left", marginLeft: "50px", fontWeight: "800", marginRight: "20px"}}>{post.title}</h1>
                        <img src={post.img_url} alt={post.title} style={{width: "50%", borderStyle: "groove", borderColor: "black"}}/>
                        <br />
                        <p style={{textAlign: "left", marginLeft: "20px", marginRight: "20px"}}>{post.content}</p>
                        <br /> 
                      <PostComments post={post} handleAddPostComment={handleAddPostComment} errors={errors} handlePostCommentUpdate={handlePostCommentUpdate} handleDeletePostComment={handleDeletePostComment}/>
                    </article>
                 :null}
            </div>
        )
    })

    return (

        <div style={{backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)", paddingBottom: "20%"}}>
            <h1 style={{textAlign: "center", width: "100%", fontWeight: "800", backgroundColor: "black", color: "lightcoral", border: "groove", borderColor: "black", marginTop: "0px", borderTop: "none", borderBottomWidth: "5px", marginBottom: "10px"}}>General Forum: Posts From Users About Any LoL Topics</h1>
            {currentUser ?
            <button style={{ marginLeft: "93%", marginRight: "20px", position: "fixed", fontWeight: "850", fontStyle: "normal", fontSize: "90%"}} className="button-85" onClick={() => setCreating((current) => !current)}>{creating ? "-" : "+"}</button>
            : <p style={{textAlign: "right", marginTop: "20px", marginRight: "10px", fontWeight: "700", fontStyle: "italic", marginBottom: "0"}}>Log In Or Sign Up To Create Posts!</p>}
            {creating ? 
                <form onSubmit={handleSubmit} style={{paddingLeft: "60px", paddingTop: "40px", paddingBottom: "20px", borderBottomStyle: "groove", borderBottomColor: "black"}}>
                    <label>
                     <h2>Title:
                        <input 
                        type="text"
                        id="title"
                        style={{height:"35px", width: "500px" ,fontSize: "14pt", backgroundColor: "black", color: "white", borderStyle: "groove", borderRadius: "10px", borderWidth: "2px"}}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                     </h2>
                    </label>
                    <label>
                        <h2>Content:
                        <p style={{fontSize:"75%"}}>Posts Can Be About Anything League Related!</p>
                        <textarea 
                        rows="12"
                        cols="80"
                        type="text"
                        id="content"
                        style={{backgroundColor: "black", color: "white", borderStyle: "groove", borderRadius: "10px", borderWidth: "2px"}}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        />
                        </h2>
                    </label>
                    <br />
                    <label>
                        Include An <b>Image URL</b> Here: 
                        <input 
                        type="text"
                        id="imgURL"
                        style={{width: "700px", height: "20px", fontSize: "10pt", backgroundColor: "black", color: "white", borderStyle: "groove", borderRadius: "10px", borderWidth: "2px", marginLeft: "5px"}}
                        value={imgURL}
                        onChange={(e) => setImgURL(e.target.value)}
                        />
                    </label>
                    <br/>
                    <br/>
                    <button type="submit">CREATE POST</button>
                    <ul>{errors && errors.map((err) => (
                         <li key={err}>{err}</li>
                     ))}</ul>
                </form>
            :null }
           <div>{displayPosts}</div> 
        </div>
    )
}

export default UserPosts;