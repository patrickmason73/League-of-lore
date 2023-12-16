import React, {useContext} from "react";
import { UserContext } from "./contexts/UserContext";
import image from "./assets/divider-professional-development-23.png";


function UserProfile({ champions, userPosts }) {
    const {currentUser} = useContext(UserContext)
    
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
                <div key={champ.id} style={{borderStyle: "groove", margin: "14px" }}>
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
        <div key={post.id} style={{borderStyle: "groove", margin: "14px", borderWidth: "min-content", borderColor: "black", marginTop: "0", width: "fit-content"}}>

            <span style={{fontWeight: "600", paddingLeft: "5px", marginBottom: "5px", marginTop: "0px", marginLeft: "2px", textAlign: "center", width: "70%", fontSize: "150%"}}>
             <img src={post.img_url} alt="post-img" style={{width: "20%", paddingRight: "3px", paddingTop: "7px", paddingLeft: "3px", textAlign: "left", paddingBottom: "1px"}}/>
                <b style={{}}>{post.title}</b>
            </span>
                <br />
                <p style={{marginTop: "0", marginLeft: "5px"}}>Created on {post.created_at.slice(0, 10)}</p>
            
   
        </div>
        )
        } else {return null}
    })
    
    return (
        <div style={{ backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)", width: "100%", paddingTop: "10px", height: "100%"}}>
            <span style={{display: "flex", alignItems: "baseline", columnFill: "balance"}}>
            <span style={{marginRight: "auto", marginLeft: "80px", width: "600px"}}>
                 <p style={{fontSize: "150%", textAlign: "left", fontWeight: "500"}}><u>Display Name:</u><span style={{fontWeight: "800"}}> {currentUser.display_name}</span></p>
                 <img src={currentUser.profile_pic} alt="profilePic" style={{ textAlign: "center", paddingLeft: "40px", maxWidth: "300px"}}/>
                 <div style={{ marginTop: "20px"}}><p style={{marginBottom: "0px", fontWeight: "700", fontSize: "150%", textDecorationLine: "underline", marginLeft: "14px"}}>Your Posts:</p><br/>{displayPosts}</div>
            </span>
                <img src={image} alt="divider" style={{ width: "auto", alignSelf: "center"}}/>
            <span style={{marginLeft: "auto", marginRight: "80px", width: "600px"}}>
                <span style={{verticalAlign: "top", fontWeight: "500", marginRight: "100px", fontSize: "125%", marginBottom: "300px"}}> <b style={{textDecorationLine: "underline", textAlign: "left"}}>Bio:</b><br/> <div>{currentUser.bio}</div> <br style={{marginBottom: "15px"}}/> </span>
                <div style={{marginRight: "80px", marginLeft: "auto", textAlign: "center"}}><b style={{textDecoration: "underline", paddingTop: "40px", marginTop: "100px" }}>Champions You Commented On:</b> <br/> {displayChamps} </div>
            </span>
            </span>
            <p style={{color: "GrayText", textAlign: "center", WebkitTextStroke: "0.3px black", marginBottom: "0", paddingBottom: "20px"}}> <i >“Knowing yourself is the beginning of all wisdom.” -Aristotle</i></p>
        </div>
    )
}


export default UserProfile;