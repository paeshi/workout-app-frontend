import { login, logout } from "../../services/firebase";
import { Link, Route, Switch } from "react-router-dom";
import Heading from "../Heading/Heading";

const Header = (props) => (
  <header className="main-header">
    <div className="brand-id">Fit Tracker</div>
    <nav className="main-nav">
      <ul className="main-nav-items ">
        {props.user ? (
          <>
            <li className="main-nav-item">{props.user.displayName}</li>
            <li className="main-nav-item">
              <Link to="/settings">TO SETTINGS</Link>
            </li>
            <li className="main-nav-item">
              <Link to="/">TO Home</Link>
            </li>
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
