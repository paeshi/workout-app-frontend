import { login, logout } from "../../services/firebase";
import { Link, Route, Switch } from "react-router-dom";
// import Heading from "../Heading/Heading";

const LandingPage = (props) => {
  const date = new Date();
  const currentTime = date.getHours();
  let greeting;
  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "gold";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "blue";
  } else if (currentTime < 24) {
    greeting = "Good Evening";
    customStyle.color = "red";
  }

  return (
    <>
      <div className="login-card">
        <h1 style={{ color: "white", fontSize: "1em" }}>
          Fit tracker is a free open source app that allows you to track your
          workout data. Please login below to access the app.
        </h1>

        {props.user ? (
          <>
            <h1 style={{ color: "white" }}>
              <span className="main-nav-item heading" style={customStyle}>
                {greeting},
              </span>{" "}
              {props.user.displayName}
            </h1>
            <Link to="/login">
              <button style={{ backgroundColor: "gold" }}>
                Let's do this!
              </button>
            </Link>

            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </>
  );
};

export default LandingPage;
