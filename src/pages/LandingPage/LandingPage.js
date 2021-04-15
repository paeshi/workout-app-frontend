import { login, logout } from "../../services/firebase";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";

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
        <h1 style={{ color: "white", fontSize: "1.2em" }}>
          Fit tracker is a free open source app that allows you to track your
          workout data. Please login below to access the app.
        </h1>

        {props.user ? (
          <>
            <p style={{ color: "white" }}>
              <span style={customStyle}>{greeting},</span>{" "}
              {props.user.displayName}
              <img
                style={{
                  height: "4rem",
                  borderRadius: "50%",
                  padding: "1px",
                  border: "thin solid gold",
                  marginLeft: "1em",
                  marginTop: ".2em",
                }}
                src={props.user.photoURL}
                alt={props.user.displayName}
              />
            </p>

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

      <Carousel />
    </>
  );
};

export default LandingPage;
