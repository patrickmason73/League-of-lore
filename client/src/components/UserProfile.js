import React, {useContext} from "react";
import { UserContext } from "./contexts/UserContext";
import image from "./assets/divider-professional-development-23.png";


function UserProfile() {
    const {currentUser} = useContext(UserContext)
    
    
    
    return (
        <div style={{ backgroundColor: "lightgray", paddingBottom: "15px", width: "100%"}}>
            <p style={{fontSize: "150%", textAlign: "center", fontWeight: "500", textDecorationLine: "underline"}}>Display Name: <b>{currentUser.display_name}</b></p>
            <div style={{width: "100%", backgroundImage: "linear-gradient(lightgray, rgb(196, 129, 246), lightgray)", display: "grid", gridTemplateColumns: "500px 300px 500px", gridTemplateRows: "600px", justifyContent: "center"}}>
            <img src={currentUser.profile_pic} alt="profilePic" style={{ width: "50%", verticalAlign: "top", float: "left", marginLeft: "100px"}}/>
            <img src={image} alt="divider" style={{marginLeft: "auto", marginRight: "auto", width: "50%", justifySelf: "center"}}/>
            <span style={{verticalAlign: "top", fontWeight: "500", textAlign: "center", marginRight: "100px", fontSize: "125%"}}>{currentUser.bio}</span>
            </div>
        </div>
    )
}


export default UserProfile;