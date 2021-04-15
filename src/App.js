import { useState, useEffect } from "react";
import { auth } from "./services/firebase";
import { Link, Route, Switch } from "react-router-dom";
// import "./styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Banner from "./components/Banner/Banner";
import Greeting from "./components/Greeting/Greeting";
import Landing from "./components/Landing/Landing";
import Carousel from "./components/Carousel/Carousel";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import LandingPage from "./pages/LandingPage/LandingPage";

export default function App() {
  const [state, setState] = useState({
    user: null,
    workouts: [],
    newWorkout: {
      workout: "",
      exercise: "",
      reps1: "10",
      reps2: "10",
      reps3: "10",
      reps4: "10",
      reps5: "10",
      weight1: "25",
      weight2: "25",
      weight3: "25",
      weight4: "25",
      weight5: "25",
    },
    editMode: false,
  });

  useEffect(() => {
    async function getAppData() {
      if (!state.user) return;
      try {
        const BASE_URL = `http://localhost:3001/api/workouts?uid=${state.user.uid}`;
        const workouts = await fetch(BASE_URL).then((res) => res.json());
        setState((prevState) => ({
          ...prevState,
          workouts,
        }));
      } catch (error) {
        console.log(error);
      }
    }

    getAppData();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setState((prevState) => ({
          ...prevState,
          user,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          workouts: [],
          user,
        }));
      }
    });
  }, [state.user]);

  async function handleSubmit(e) {
    // this statement exits for safety:
    if (!state.user) return;
    e.preventDefault();

    const BASE_URL = "http://localhost:3001/api/workouts";

    if (!state.editMode) {
      const workouts = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({ ...state.newWorkout, uid: state.user.uid }),
      }).then((res) => res.json());

      setState((prevState) => ({
        ...prevState,
        workouts,
        newWorkout: {
          workout: "",
          exercise: "",
          reps1: "10",
          reps2: "10",
          reps3: "10",
          reps4: "10",
          reps5: "10",
          weight1: "25",
          weight2: "25",
          weight3: "25",
          weight4: "25",
          weight5: "25",
        },
      }));
    } else {
      const {
        workout,
        exercise,
        _id,
        reps1,
        reps2,
        reps3,
        reps4,
        reps5,
        weight1,
        weight2,
        weight3,
        weight4,
        weight5,
      } = state.newWorkout;
      const workouts = await fetch(`${BASE_URL}/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          workout,
          exercise,
          reps1,
          reps2,
          reps3,
          reps4,
          reps5,
          weight1,
          weight2,
          weight3,
          weight4,
          weight5,
        }),
      }).then((res) => res.json());

      setState((prevState) => ({
        ...prevState,
        workouts,
        newWorkout: {
          workout: "",
          exercise: "",
          reps1: "10",
          reps2: "10",
          reps3: "10",
          reps4: "10",
          reps5: "10",
          weight1: "25",
          weight2: "25",
          weight3: "25",
          weight4: "25",
          weight5: "25",
        },
        editMode: false,
      }));
    }
  }

  function handleChange(e) {
    setState((prevState) => ({
      ...prevState,
      newWorkout: {
        ...prevState.newWorkout,
        [e.target.name]: e.target.value,
      },
    }));
  }

  async function handleDelete(workoutId) {
    if (!state.user) return;
    const URL = `http://localhost:3001/api/workouts/${workoutId}`;
    const workouts = await fetch(URL, {
      method: "DELETE",
    }).then((res) => res.json());

    setState((prevState) => ({
      ...prevState,
      workouts,
    }));
  }

  function handleEdit(workoutId) {
    const {
      workout,
      exercise,
      _id,
      reps1,
      reps2,
      reps3,
      reps4,
      reps5,
      weight1,
      weight2,
      weight3,
      weight4,
      weight5,
    } = state.workouts.find((workout) => workout._id === workoutId);
    setState((prevState) => ({
      ...prevState,
      newWorkout: {
        workout,
        exercise,
        _id,
        reps1,
        reps2,
        reps3,
        reps4,
        reps5,
        weight1,
        weight2,
        weight3,
        weight4,
        weight5,
      },
      editMode: true,
    }));
  }

  function handleCancel() {
    setState((prevState) => ({
      ...prevState,
      newWorkout: {
        workout: "",
        exercise: "",
        reps1: "10",
        reps2: "10",
        reps3: "10",
        reps4: "10",
        reps5: "10",
        weight1: "25",
        weight2: "25",
        weight3: "25",
        weight4: "25",
        weight5: "25",
      },
      editMode: false,
    }));
  }

  return (
    <>
      <Header user={state.user} />
      {/* <Greeting></Greeting> */}
      <Landing />
      {/* <Carousel /> */}
      <Switch>
        <Route exact path="/home">
          <LandingPage user={state.user} />
        </Route>
        <Route path="/carousel" render={(props) => <Carousel {...props} />} />
        <Route
          path="/settings"
          render={(props) => <SettingsPage {...props} />}
        />
        {/* <Carousel /> */}
        {/* <Link to="/form">Get it done</Link> */}
        {/* <Link to="/settings">HERE's THE LINK</Link> */}
        <Route exact path="/login">
          <Form
            state={state}
            setState={setState}
            useState={useState}
            // getAppData={getAppData}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleCancel={handleCancel}
          />
        </Route>
      </Switch>

      {/* <Footer /> */}
    </>
  );
}
