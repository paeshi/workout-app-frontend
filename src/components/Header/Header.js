import { login, logout } from "../../services/firebase";
import Heading from "../Heading/Heading";
import headerphoto from "../../images/headerphoto.jpg";

const Header = (props) => (
  <header className="main-header">
    {/* <img className="headerphoto" src={headerphoto} alt=""/> */}
    <div className="brand-id">Fit Tracker</div>
    <nav className="main-nav">
      <ul className="main-nav-items ">
        {props.user ? (
          <>
            <li className="main-nav-item">{props.user.displayName}</li>
            <li className="main-nav-item">
              <img src={props.user.photoURL} alt={props.user.displayName} />
            </li>
            <li className="auth-link main-nav-item" onClick={logout}>
              Logout
            </li>
          </>
        ) : (
          <li className="auth-link main-nav-item" onClick={login}>
            Login
          </li>
        )}
      </ul>
    </nav>
  </header>
);

export default Header;
