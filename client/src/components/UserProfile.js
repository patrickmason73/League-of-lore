import React, {useContext} from "react";
import { UserContext } from "./contexts/UserContext";



function UserProfile() {
    const {currentUser} = useContext(UserContext)
    
    
    
    return (
        <div style={{display: "grid", alignItems: "center"}}>
            <p style={{fontSize: "150%", textAlign: "center"}}>Display Name: <b>{currentUser.display_name}</b></p>
            <img src={currentUser.profile_pic} alt="profilePic" style={{margin: "auto", width: "20%"}}/>\
            <br />
            <p style={{margin: "auto"}}>{currentUser.bio}</p>
        </div>
    )
}


export default UserProfile;