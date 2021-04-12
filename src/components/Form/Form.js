// import { useState, useEffect } from "react";
import "../../styles.css";
import workoutsArray, { workoutType } from "../../variables/workoutVariables";
// import {auth} from '../../services/firebase'

const Form = ({
  state,
  setState,
  useState,
  getAppData,
  handleSubmit,
  handleChange,
  handleDelete,
  handleEdit,
  handleCancel,
}) => {
  // const workoutsArray = [
  //   {
  //     name: "Bench Press",
  //   },
  //   {
  //     name: "Push-Ups",
  //   },
  //   {
  //     name: "Squat",
  //   },
  // ];
  console.log(workoutsArray);

  return (
    <section>
      {state.workouts.map((x, index) => (
        <article key={index}>
          <table>
            <tbody>
              <tr>
                <td>
                  <h2>{x.workout}</h2>
                </td>
              </tr>

              <tr>
                <td>{x.exercise}</td>
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
            </tbody>
          </table>

          <div onClick={() => handleDelete(x._id)}>{"🗑"}</div>
          {!state.editMode && (
            <div onClick={() => handleEdit(x._id)}>{"✏️"}</div>
          )}
        </article>
      ))}
      {state.user && (
        <div className="mainDiv">
          <hr />
          <label>
            <span>Workout</span>

            <input
              name="workout"
              value={state.newWorkout.workout}
              onChange={handleChange}
              list="daySelect"
              type="text"
            />
            <datalist id="daySelect">
              {workoutType.map((x) => (
                <option value={x.type}>{x.type}</option>
              ))}
            </datalist>
          </label>

          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>
                      <input
                        placeholder="choose or add workout"
                        list="workoutSelect"
                        name="exercise"
                        value={state.newWorkout.exercise}
                        onChange={handleChange}
                        type="text"
                        required
                      />
                      <datalist id="workoutSelect">
                        {workoutsArray.map((x) => (
                          <option value={x.name}>{x.name}</option>
                        ))}
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
                  <td>
                    <input
                      name="reps1"
                      value={state.newWorkout.reps1}
                      onChange={handleChange}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      name="reps2"
                      value={state.newWorkout.reps2}
                      onChange={handleChange}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      name="reps3"
                      value={state.newWorkout.reps3}
                      onChange={handleChange}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      name="reps4"
                      value={state.newWorkout.reps4}
                      onChange={handleChange}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      name="reps5"
                      value={state.newWorkout.reps5}
                      onChange={handleChange}
                      type="text"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>
                      <span>Weight</span>
                    </label>
                  </td>
                  <td>
                    <input
                      name="weight1"
                      value={state.newWorkout.weight1}
                      onChange={handleChange}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      name="weight2"
                      value={state.newWorkout.weight2}
                      onChange={handleChange}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      name="weight3"
                      value={state.newWorkout.weight3}
                      onChange={handleChange}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      name="weight4"
                      value={state.newWorkout.weight4}
                      onChange={handleChange}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      name="weight5"
                      value={state.newWorkout.weight5}
                      onChange={handleChange}
                      type="text"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button>{state.editMode ? "Edit" : "Log It"}</button>
          </form>
          {state.editMode && <button onClick={handleCancel}>Cancel</button>}
        </div>
      )}
    </section>
  );
};

export default Form;
