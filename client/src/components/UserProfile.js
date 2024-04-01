import React, {useContext, useState} from "react";
import { UserContext } from "./contexts/UserContext";
import image from "./assets/divider-professional-development-23.png";


function UserProfile({ champions, userPosts, updateUser }) {
    const {currentUser} = useContext(UserContext)
    const [editingName, setEditingName] = useState(false)
    const [newName, setNewName] = useState(currentUser.display_name)
    const [newBio, setNewBio] = useState(currentUser.bio)
    const [newProfilePic, setNewProfilePic] = useState(currentUser.profile_pic)
    const [errors, setErrors] = useState([])

    function handleUpdateUser(e) {
        e.preventDefault();
        updateUser(newName, newBio, newProfilePic, setErrors, setEditingName)
    }
    
    const userChamps = champions.map((champ) => {
        if (champ.capstone_users.find(user => user.id === currentUser.id)) {
            return champ
        } else {return null}
    })

    const currentUserPosts = userPosts.map((post) => {
        if (post.capstone_user.id === currentUser.id) {
        return post
        } else {return null}
    })

    const displayChamps = userChamps.map((champ) => {
        if (champ !== null) {
            const comments = champ.champion_comments.map((comment) => {
                if (comment.capstone_user_id === currentUser.id) {
                    return (
                        <li key={comment.id} style={{alignItems: "left", listStyle: "none", margin: "4px"}}>
                            <span>"{comment.content}" on {comment.created_at.slice(0, 10)}</span>
                        </li>
                    )
                } else {return null}
            })
            return (
                <div key={champ.id} style={{borderStyle: "solid", margin: "14px" }}>
                    <span >
                    <img src={champ.splash_art} alt={champ.name} style={{width: "21px", height: "21px", paddingRight: "3px", paddingTop: "5px"}}/>
                    
                    <b>{champ.name}</b>
                    <br/>
                    <b style={{textDecoration: "underline", textAlign: "left"}}>Comments: </b> <br/>

                        {comments}
                     </span>
                </div>
            )
        } else {return null}
    })

    const displayPosts = currentUserPosts.map((post) => {
        if (post !== null) {
        return (
        <div key={post.id} style={{borderStyle: "groove", marginRight: "auto", marginLeft: "auto", marginBottom: "15px", borderWidth: "min-content", borderColor: "black", width: "fit-content", textAlign: "center"}}>

            <span style={{fontWeight: "600", paddingLeft: "5px", marginBottom: "5px", marginTop: "0px", marginLeft: "2px", textAlign: "center", width: "70%", fontSize: "150%"}}>
             <div style={{marginTop: "0px"}}><img src={post.img_url} alt="post-img" style={{width: "50%", textAlign: "center", maxWidth: "300px", borderStyle: "groove", borderColor: "black"}}/></div>
                <p style={{paddingRight: "3px", paddingLeft: "3px"}}><b>{post.title}</b></p>
            </span>
                <p style={{marginTop: "0", textAlign: "center"}}>Created on {post.created_at.slice(0, 10)}</p>
        </div>
        )
        } else {return null}
    })
    
    return (
        <div style={{ backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)", width: "100%", paddingTop: "10px", height: "100%"}}>
            <span style={{display: "flex", alignItems: "baseline", columnFill: "balance"}}>
            <span style={{marginRight: "auto", marginLeft: "80px", width: "600px"}}>
                 <div style={{fontSize: "150%", textAlign: "left", fontWeight: "500", borderRadius: "5px", padding: "3px", marginTop: "20px", paddingBottom: "0px", maxWidth: "380px", marginLeft: "auto", marginRight: "auto"}}><u>Display Name:</u><span style={{fontWeight: "800"}}> {currentUser.display_name} <br /> <button style={{backgroundColor: "black", color: "white", cursor: "pointer", fontSize: "55%", fontWeight: "600", borderRadius: "4px", marginLeft: "30px", marginBottom: "5px"}} onClick={() => setEditingName(current => !current)}>{editingName ? "Cancel" : "Edit Display Name"}</button></span>
                    {editingName ? 
                        <form onSubmit={handleUpdateUser} >
                            <label>
                                <u>New Name: </u>
                                <input 
                                    type="text"
                                    id="new-name"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    style={{padding: "2px", margin: "3px", fontSize: "65%", backgroundColor: "black", color: "white"}}
                                />
                            </label>
                            <button type="submit" className="button-12" style={{marginLeft: "30px", fontWeight: "700", marginBottom: "0px"}}>Save</button>
                            <ul style={{listStyle: "none", paddingLeft: "5px"}}>{errors && errors.map((err) => (
                                <li key={err} style={{fontWeight: "700", fontSize: "75%"}}><u>ERROR:</u> {err}</li>
                             ))}</ul>
                        </form>
                    :null}
                 </div>
                 <div style={{ marginTop: "20px", marginBottom: "20px", textAlign: "center"}}><img src={currentUser.profile_pic} alt="profilePic" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto", maxWidth: "300px", borderStyle: "groove", borderColor: "black"}}/></div>
                 <div style={{ marginTop: "10px", borderColor: "black", borderRadius: "5px", borderWidth: "5px", textAlign: "center"}}><p style={{marginBottom: "0px", fontWeight: "800", fontSize: "175%", textDecorationLine: "underline", marginLeft: "14px", marginTop: "0"}}>Your Posts:</p><br/>{displayPosts}</div>
            </span>
                <img src={image} alt="divider" style={{ width: "auto", alignSelf: "center"}}/>
            <span style={{marginLeft: "auto", marginRight: "80px", width: "600px"}}>
                <span style={{verticalAlign: "top", fontWeight: "500", marginRight: "100px", fontSize: "125%", marginBottom: "300px", paddingLeft: "14px"}}> <b style={{textDecorationLine: "underline", textAlign: "left", fontWeight: "800"}}>Bio:</b><br/> <div style={{paddingLeft: "14px"}}>{currentUser.bio}</div> <br style={{marginBottom: "15px"}}/> </span>
                <div style={{marginRight: "80px", marginLeft: "auto", textAlign: "center", borderColor: "black", borderWidth: "5px", marginTop: "80px"}}><b style={{textDecoration: "underline", paddingTop: "40px", marginTop: "100px", fontWeight: "800", fontSize: "120%" }}>Champions You Commented On:</b> <br/> {displayChamps} </div>
            </span>
            </span>
            <p style={{color: "GrayText", textAlign: "center", WebkitTextStroke: "0.3px black", marginBottom: "0", paddingBottom: "20px"}}> <i>“Knowing yourself is the beginning of all wisdom.” -Aristotle</i></p>
        </div>
    )
}


export default UserProfile;