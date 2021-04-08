import { useState, useEffect } from "react";
import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Form from './components/Form/Form'

function App() {

 

  // const [state, setState] = useState({
  //   user: null,
  //   skills: [{ skill: "JavaScript", level: "4" }],
  //   newSkill: {
  //     skill: "",
  //     level: "3",
  //   },
  // });



  return (
    <div className="App">
    <Header />

    <hr/>
    <Form 
    day="Upper Body"

    />


    {/* <form action="">
      <label htmlFor="">
        <span>Exercise</span>
        <input type="text" name="workout" value={state.newWorkout.workout}/>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </label>


    </form> */}


<Footer />












    </div>
  );
}

export default App;
