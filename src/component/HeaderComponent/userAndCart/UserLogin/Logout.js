import React from 'react';
import './logout.css'
import {useHistory} from "react-router-dom";
function Logout(props) {
    const history = useHistory();
    function handleLogout(){
        localStorage.clear()
        history.push("/")
        window.location.reload()
    }
    return (
        <div style={{display:"flex"}}>
           <button className= "logout" onClick = {handleLogout}>Log out</button> 
        </div>
    );
}

export default Logout;