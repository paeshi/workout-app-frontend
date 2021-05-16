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
    customStyle.color = "#f48b29";
  } else if (currentTime < 24) {
    greeting = "Good Evening";
    customStyle.color = "#fa1e0e";
  }

  return (
    <>
      <Carousel />
      <div className="landing-page-container">
        <div className="login-card">
          <h1 style={{ color: "white", fontSize: "1.2em" }}>
            Fit Journal is a free open source app that allows you to track your
            workout data. Use the navigation bar at the top or login below.
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

              <Link to="/workout">
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
        <div className="quote-container">
          <p>
            "Forget failure. Forget Mistakes. Forget Everything, except what
            you’re going to do now. And do it." <br />– Lou Ferrigno, 2-time Mr
            Universe{" "}
          </p>
          <br />
          <p>
            "If you have discipline, drive, determination, nothing is
            impossible." <br />– Dana Linn Bailey, First Ever Women’s Physique
            Olympia Champion
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
