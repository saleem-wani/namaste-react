
import {LOGO_URL} from '../utils/constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </ul>
            </div>

        </div>
    )
}
export default Header;