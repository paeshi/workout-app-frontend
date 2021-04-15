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
  // function resetInput() {
  //   console.log("clicked");
  // }
  // function handleDate() {
  //   return x.createdAt.slice(0, 10) + " " + x.createdAt.slice(12, 15);
  // }
  return (
    <section>
      <div className="form-container text-white">
        {state.workouts.map((x, index) => (
          <article key={index}>
            <table className="display-table">
              <thead>
                <tr>
                  <td colSpan="5" valign="top">
                    <p className="h6">{x.workout}</p>
                  </td>
                  <td>{`Created on: ${x.createdAt.slice(0, 10)}`}</td>
                  {/* <td>{handleDate}</td> */}
                </tr>
              </thead>
              <tbody>
                <tr className="active-row">
                  <td valign="top">{x.exercise}</td>
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

                <tr>
                  <td colSpan="5">{x.notes}</td>

                  <td id="table-buttons">
                    <div
                      id="table-button-delete"
                      onClick={() => handleDelete(x._id)}
                    >
                      {"🗑 Delete"}
                    </div>
                    {!state.editMode && (
                      <div
                        id="table-button-edit"
                        onClick={() => handleEdit(x._id)}
                      >
                        {"✏️ Edit"}
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        ))}
      </div>
      {state.user && (
        <div className="mainDiv">
          <hr />

          <form onSubmit={handleSubmit}>
            <table className="table-form text-white">
              <thead>
                <tr>
                  <td colSpan="6">
                    <label>
                      {/* <span>Workout </span> */}

                      <input
                        name="workout"
                        value={state.newWorkout.workout}
                        onChange={handleChange}
                        list="daySelect"
                        type="text"
                        placeholder="Workout Type"
                      />
                      {/* <button onClick={resetInput}>x</button> */}

                      <datalist id="daySelect">
                        {workoutType.map((x) => (
                          <option value={x.type}>{x.type}</option>
                        ))}
                      </datalist>
                    </label>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr className="active-row">
                  <td>
                    <label>
                      <input
                        // style={{ width: "50%" }}
                        placeholder="Exercise"
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
                      maxLength="4"
                      size="4"
                    />
                  </td>
                  <td>
                    <input
                      name="reps2"
                      value={state.newWorkout.reps2}
                      onChange={handleChange}
                      type="text"
                      maxLength="4"
                      size="4"
                    />
                  </td>
                  <td>
                    <input
                      name="reps3"
                      value={state.newWorkout.reps3}
                      onChange={handleChange}
                      type="text"
                      maxLength="4"
                      size="4"
                    />
                  </td>
                  <td>
                    <input
                      name="reps4"
                      value={state.newWorkout.reps4}
                      onChange={handleChange}
                      type="text"
                      maxLength="4"
                      size="4"
                    />
                  </td>
                  <td>
                    <input
                      name="reps5"
                      value={state.newWorkout.reps5}
                      onChange={handleChange}
                      type="text"
                      maxLength="4"
                      size="4"
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
                      maxLength="4"
                      size="4"
                    />
                  </td>
                  <td>
                    <input
                      name="weight2"
                      value={state.newWorkout.weight2}
                      onChange={handleChange}
                      type="text"
                      maxLength="4"
                      size="4"
                    />
                  </td>
                  <td>
                    <input
                      name="weight3"
                      value={state.newWorkout.weight3}
                      onChange={handleChange}
                      type="text"
                      maxLength="4"
                      size="4"
                    />
                  </td>
                  <td>
                    <input
                      name="weight4"
                      value={state.newWorkout.weight4}
                      onChange={handleChange}
                      type="text"
                      maxLength="4"
                      size="4"
                    />
                  </td>
                  <td>
                    <input
                      name="weight5"
                      value={state.newWorkout.weight5}
                      onChange={handleChange}
                      type="text"
                      maxLength="4"
                      size="4"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="5">
                    <textarea
                      name="notes"
                      value={state.newWorkout.notes}
                      onChange={handleChange}
                      rows="4"
                      cols="50"
                      placeholder="Notes"
                    />
                  </td>

                  <td>
                    <button>{state.editMode ? "Edit" : "Log It"}</button>
                    {state.editMode && (
                      <button onClick={handleCancel}>Cancel</button>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      )}
    </section>
  );
};

export default Form;
