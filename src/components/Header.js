
import {LOGO_URL} from '../utils/constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
   
    const[btnName,setBtnName]=useState("Login")
    return (
        
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-item">
                <ul>
                    <li>
                       <Link to="/">Home</Link> 
                        </li>
                    <li>
                        <Link to="/about">About</Link>
                        </li>
                    <li>Contact</li>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <button onClick={()=>btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}
export default Header;