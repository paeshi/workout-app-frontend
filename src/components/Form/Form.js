import { useState, useEffect } from "react";
import "../../styles.css";
import {auth} from '../../services/firebase'



const Form = ({state, setState, useState, getAppData, handleSubmit, handleChange, handleDelete, handleEdit, handleCancel}) =>  {

  
    return (
   
          <section>
            {state.workouts.map((x, index) => (
              
              <article key={index}>
               <table>
               <tr>
               <td><h2>{x.workout}</h2></td>
                
                </tr>
  
                <tr>
                <td>
                {x.exercise}
                </td>
                <td>set 1</td>
              <td>set 2</td>
              <td>set 3</td>
              <td>set 4</td>
              <td>set 5</td>
                </tr>
  
                <tr>
               <td>Reps:</td> 
                <td>{x.reps1} </td>
                <td>{x.reps2}</td> 
                <td>{x.reps3}</td> 
                <td>{x.reps4}</td> 
                <td>{x.reps5}</td>
                </tr>
  
                <tr>
                <td>Weight:</td> 
                <td>{x.weight1} </td>
                <td>{x.weight2}</td> 
                <td>{x.weight3}</td> 
                <td>{x.weight4}</td> 
                <td>{x.weight5}</td>
                </tr>
  
             
                </table>
                <div onClick={() => handleDelete(x._id)}>{"🗑"}</div>
                {!state.editMode && <div onClick={() => handleEdit(x._id)}>{"✏️"}</div>}
              </article>
             
            ))}
  
            {
              state.user &&
              <>
            
            <hr />
  
            <label>
                <span>Workout</span>
                <input name="workout" value={state.newWorkout.workout} onChange={handleChange} list="daySelect"  />
                <datalist id="daySelect">
          <option value="Custom">Custom</option>
        <option value="Upper Body Power">Upper Body Power</option>
        <option value="Lower Body Power">Lower Body Power</option>
        <option value="Back and Shoulders Hypertrophy">Back and Shoulders Hypertrophy</option>
        <option value="Lower Body Hypertrophy">Lower Body Hypertrophy</option>
        <option value="Chest and Arms Hypertrophy">Chest and Arms Hypertrophy</option>
        <option value="Upper Body">Upper Body</option>
        <option value="Lower Body">Lower Body</option>
        <option value="Arms">Arms</option>
        <option value="Chest">Chest</option>
        <option value="Back">Back</option>
        <option value="Shoulders">Shoulders</option>
        <option value="Abs">Abs</option>
        
        </datalist>
              </label>
  
  
            <form onSubmit={handleSubmit}>
              <table>
              <tr>
              <td>
              <label>
                {/* <span>Exercise</span> */}
                <input placeholder="choose or add workout" list="workoutSelect" name="exercise" value={state.newWorkout.exercise} onChange={handleChange} required />
                <datalist id="workoutSelect">
                  <option value="Bench Press">Bench Press</option>
                  <option value="Curl">Curl</option>
                  <option value="Weighted Pull-Ups">Weighted Pull-Ups</option>
                  <option value="Horizontal Row">Horizontal Row</option>
                  <option value="Weighted Dips">Weighted Dips</option>
                  <option value="Pendlay Rows">Pendlay Rows</option>
                  <option value="Dumbbell Shoulder Press">Dumbbell Shoulder Press</option>
                  <option value="Cambered Bar Curls">Cambered Bar Curls</option>
                  <option value="Skull Crushers">Skull Crushers</option>
                  <option value="Squats">Squats</option>
                  <option value="Hack Squats">Hack Squats</option>
                  <option value="Leg Extensions">Leg Extensions</option>
                  <option value="Deadlifts">Deadlifts</option>
                  <option value="Leg Curls">Leg Curls</option>
                  <option value="Standing Calf Raise">Standing Calf Raise</option>
                  <option value="Seated Calf Raise">Seated Calf Raise</option>
                  <option value="Seated Cable Row">Seated Cable Row</option>
                  <option value="Braced Dumbbell Rows">Braced Dumbbell Rows</option>
                  <option value="Close Grip Pulldowns">Close Grip Pulldowns</option>
                  <option value="Upright Rows">Upright Rows</option>
                  <option value="Side Lateral Raises">Side Lateral Raises</option>
                  <option value="Leg Press">Leg Press</option>
                  <option value="Romanian Deadlift">Romanian Deadlift</option>
                  <option value="Lying Leg Curls">Lying Leg Curls</option>
                  <option value="Seated Leg Curls">Seated Leg Curls</option>
                  <option value="Donkey Calf Raises">Donkey Calf Raises</option>
                  <option value="Dumbbell Press">Dumbbell Press</option>
                  <option value="Incline Dumbbell Press">Incline Dumbbell Press</option>
                  <option value="Incline Chest Press">Incline Chest Press</option>
                  <option value="Incline Cable Flys">Incline Cable Flys</option>
                  <option value="Preacher Curls">Preacher Curls</option>
                  <option value="DB Concentration Curls">DB Concentration Curls</option>
                  <option value="Spider Curls">Spider Curls</option>
                  <option value="Cambered Bar Tricep Extension">Cambered Bar Tricep Extension</option>
                  <option value="Cable Pressdowns">Cable Pressdowns</option>
                  <option value="Cable Kickbacks">Cable Kickbacks</option>
                  
                  </datalist>
               
              
              </label>
              </td>
              <td>set 1</td>
              <td>set 2</td>
              <td>set 3</td>
              <td>set 4</td>
              <td>set 5</td>
              </tr>
  
              <tr>
              <td>
              <label>
              <span>Reps</span>
              </label>
               </td>
              <td><input name="reps1" value={state.newWorkout.reps1} onChange={handleChange}/></td>
              <td><input name="reps2" value={state.newWorkout.reps2} onChange={handleChange}/></td>
              <td><input name="reps3" value={state.newWorkout.reps3} onChange={handleChange}/></td>
              <td><input name="reps4" value={state.newWorkout.reps4} onChange={handleChange}/></td>
              <td><input name="reps5" value={state.newWorkout.reps5} onChange={handleChange}/></td>
              
             
              </tr>
  
              <tr>
              <td><label>
              <span>Weight</span></label></td>
              <td>
              <input name="weight1" value={state.newWorkout.weight1} onChange={handleChange}/>
              </td>
              <td>
              <input name="weight2" value={state.newWorkout.weight2} onChange={handleChange}/>
              </td>
              <td>
              <input name="weight3" value={state.newWorkout.weight3} onChange={handleChange}/>
              </td>
              <td>
              <input name="weight4" value={state.newWorkout.weight4} onChange={handleChange}/>
              </td>
              <td>
              <input name="weight5" value={state.newWorkout.weight5} onChange={handleChange}/>
              </td>
              
              </tr>
              
              </table>
              <button>{state.editMode ? 'Edit' : 'Log It'}</button>
            </form>
            {state.editMode && <button onClick={handleCancel}>Cancel</button>}
            </>
            }
          </section>
       
   
    );
  }

  export default Form;