import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';


    
    

  const navStyle = {
    height: '75px',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: "10px",
    // position: "fixed",
    paddingTop: "3px"
  }

function Navbar({ logout, navigate }) {
    const {currentUser} = useContext(UserContext)

    return (
        <div style={{position: 'fixed', display: 'block', borderStyle: "groove", borderColor: "black"}}>
          {currentUser !== null && <strong style={{fontSize:"150%", fontWeight: "800", backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)", display: 'block', borderStyle: "solid"}}>Welcome back, {currentUser.display_name}</strong>}
            <nav style={navStyle}>
              
                <NavLink to="/"
               
                className="button-1"
                role='button'
                style={{marginLeft: "40px"}}
                >
                 Home
                </NavLink>
                
                <NavLink to="/login"
               
               className="button-1"
               role='button'
                >
                 {currentUser ? "My Account" : "Login"}
                </NavLink>
                
                <NavLink to="/signup"
              
              className="button-1"
              role='button'
                >
                 Sign up
                </NavLink>
                
                <NavLink to="/posts/new"
              
              className="button-1"
              role='button'
              >
                General Forum
              </NavLink>

                {currentUser ? <NavLink to="/logout" className="button-1" role='button' style={{backgroundColor: 'red'}} onClick={logout}>
                Log Out
                </NavLink> : null}
                <NavLink to="/search"
                className="button-1"
                role='button'
                >
                  Search
                </NavLink>
                <img src='https://1000logos.net/wp-content/uploads/2020/09/League-of-Legends-Logo-2008.png' alt='lol_logo' className='lol-logo' style={{ width: "13%", cursor: "pointer"}} role="button" onClick={() => navigate("/")}/>
                </nav>
                
                
        </div>
    )
}


export default Navbar