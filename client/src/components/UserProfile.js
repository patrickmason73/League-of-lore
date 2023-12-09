import React, {useContext} from "react";
import { UserContext } from "./contexts/UserContext";
import image from "./assets/divider-professional-development-23.png";


function UserProfile({ champions }) {
    const {currentUser} = useContext(UserContext)
    
    const champsDisplay = champions.map((champ) => {
        if (champ.capstone_users.find(user => user.id === currentUser.id)) {
            return champ
        } else {return null}
    })

    const displayChamps = champsDisplay.map((champ) => {
        if (champ !== null) {
            const comments = champ.champion_comments.map((comment) => {
                if (comment.capstone_user_id === currentUser.id) {
                    return (
                        <li key={comment.id} style={{alignItems: "left", listStyle: "none"}}>
                            <span>"{comment.content}" on {comment.created_at.slice(0, 10)}</span>
                        </li>
                    )
                } else {return null}
            })
            return (
                <div style={{borderStyle: "groove", margin: "9px"}}>
                    <span >
                    <img src={champ.splash_art} alt={champ.name} style={{width: "21px", height: "21px"}}/>
                    
                    <b>{champ.name}</b>
                    <br/>
                    <b style={{textDecoration: "underline"}}>Comments: </b> <br/>

                        {comments}
                     </span>
                </div>
            )
        } else {return null}
    })
    
    return (
        <div style={{ backgroundColor: "lightgray", paddingBottom: "15px", width: "100%", paddingTop: "10px"}}>
            <p style={{fontSize: "150%", textAlign: "center", fontWeight: "500", textDecorationLine: "underline"}}>Display Name: <b>{currentUser.display_name}</b></p>
            <div style={{width: "100%", backgroundImage: "linear-gradient(lightgray, rgb(196, 129, 246), lightgray)", display: "grid", gridTemplateColumns: "500px 300px 500px", gridTemplateRows: "600px", justifyContent: "center"}}>
            <img src={currentUser.profile_pic} alt="profilePic" style={{ width: "50%", verticalAlign: "top", float: "left", marginLeft: "100px"}}/>
            <img src={image} alt="divider" style={{marginLeft: "auto", marginRight: "auto", width: "50%", justifySelf: "center"}}/>
            <span style={{verticalAlign: "top", fontWeight: "500", textAlign: "center", marginRight: "100px", fontSize: "125%"}}>{currentUser.bio} <br/> <b style={{textDecoration: "underline", paddingTop: "30px"}}>Champions You Commented On:</b> <br/> {displayChamps} </span>
            </div>
            <p style={{color: "GrayText", justifyContent: "center", textAlign: "center"}}> <i >“Knowing yourself is the beginning of all wisdom.” -Aristotle</i></p>
        </div>
    )
}


export default UserProfile;