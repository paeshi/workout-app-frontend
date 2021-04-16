import { login, logout } from "../../services/firebase";
import { Link } from "react-router-dom";
// import { Carousel } from "bootstrap";

const Header = (props) => (
  <header className="main-header">
    <div className="brand-id">
      <Link to="/">Fit Journal</Link>
    </div>
    <nav className="main-nav">
      <ul className="main-nav-items ">
        {props.user ? (
          <>
            <li className="main-nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="main-nav-item">
              <Link to="/about">About</Link>
            </li>
            <li id="workout" className="main-nav-item">
              <Link to="/workout">Let's Do This</Link>
            </li>
            <li className="main-nav-item"></li>
            {/* <li className="main-nav-item">
              <img src={props.user.photoURL} alt={props.user.displayName} />
            </li> */}
            <li className="auth-link main-nav-item log-button" onClick={logout}>
              Logout
            </li>
          </>
        ) : (
          <li className="auth-link main-nav-item log-button" onClick={login}>
            Login
          </li>
        )}
      </ul>
    </nav>
  </header>
);

export default Header;
