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
    // position: "fixed"
  }

function Navbar({ logout }) {
    const {currentUser} = useContext(UserContext)

    return (
        <div style={{position: 'fixed', display: 'block'}}>
          {currentUser !== null && <strong style={{fontSize:"150%", backgroundColor: "#EA4C89", display: 'block', borderStyle: "solid"}}>Welcome back, {currentUser.display_name}</strong>}
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
                <NavLink to="/search/:name"
                className="button-1"
                role='button'
                >
                  Search
                </NavLink>
                <img src='https://1000logos.net/wp-content/uploads/2020/09/League-of-Legends-Logo-2008.png' alt='lol_logo' className='lol-logo' style={{height: "auto", width: "15%"}}/>
                </nav>
                
                
        </div>
    )
}


export default Navbar