import React from "react";
//importing useDispatch,useSelector hook from react-redux to dispatch the action and get state
import { useDispatch, useSelector } from "react-redux";
//importing style from styles folder
import styles from "../styles/habits.module.css";
//this function will use to update status of particular day
import { updateStatus } from "../actions";

//habits component
function Habits() {
  //get the habit from redux state
  const habits = useSelector((state) => state.habitReducers.list);

  // using useDispatch hook for dispatching the action from UI to the redux store which will change the UI on global state change
  const dispatch = useDispatch();

  //call dispatch function to update state and change the status of that day
  const changeStatus = (status, date, id) => {
    const data = { status, date, id };
    dispatch(updateStatus(data));
  };

  return (
    <>
      <h1 className={`${styles.Title} text-center`}>
        Weekly View Of All The Habits
      </h1>

      <div className={`${styles.main_div} bg-light list-group-item my-4`}>
        {habits.length > 0 ? (
          habits.map((habit) => {
            return (
              <div className={`${styles.details} col-8 mx-auto`} key={habit.id}>
                <table className="my-4">
                  <tbody>
                    <tr className={styles.taskname}>
                      <td
                        className={`${styles.taskname} text-center`}
                        colSpan="7"
                      >
                        <span className={styles.habit_name}>{habit.habit}</span>
                        {" ( " + habit.description + " )"}
                      </td>
                    </tr>
                    <tr>
                      {/* displaying the dates of the Last 7 day */}
                      <th>{habit.dates[0].date}</th>
                      <th>{habit.dates[1].date}</th>
                      <th>{habit.dates[2].date}</th>
                      <th>{habit.dates[3].date}</th>
                      <th>{habit.dates[4].date}</th>
                      <th>{habit.dates[5].date}</th>
                      <th className={styles.today}>{habit.dates[6].date}</th>
                    </tr>
                    <tr>
                      {/* Displaying the habit status of the last 7 day */}
                      <td>
                        <select
                          id="status"
                          className={habit.dates[0].status}
                          onChange={(event) =>
                            changeStatus(
                              event.target.value,
                              habit.dates[0].date,
                              habit.id
                            )
                          }
                        >
                          <option value="none">None</option>
                          <option value="done">Done</option>
                          <option value="undone">Undone</option>
                        </select>
                      </td>
                      <td>
                        <select
                          id="status"
                          className={habit.dates[1].status}
                          onChange={(event) =>
                            changeStatus(
                              event.target.value,
                              habit.dates[1].date,
                              habit.id
                            )
                          }
                        >
                          <option value="none">None</option>
                          <option value="done">Done</option>
                          <option value="undone">Undone</option>
                        </select>
                      </td>
                      <td>
                        <select
                          id="status"
                          className={habit.dates[2].status}
                          onChange={(event) =>
                            changeStatus(
                              event.target.value,
                              habit.dates[2].date,
                              habit.id
                            )
                          }
                        >
                          <option value="none">None</option>
                          <option value="done">Done</option>
                          <option value="undone">Undone</option>
                        </select>
                      </td>
                      <td>
                        <select
                          id="status"
                          className={habit.dates[3].status}
                          onChange={(event) =>
                            changeStatus(
                              event.target.value,
                              habit.dates[3].date,
                              habit.id
                            )
                          }
                        >
                          <option value="none">None</option>
                          <option value="done">Done</option>
                          <option value="undone">Undone</option>
                        </select>
                      </td>
                      <td>
                        <select
                          id="status"
                          className={habit.dates[4].status}
                          onChange={(event) =>
                            changeStatus(
                              event.target.value,
                              habit.dates[4].date,
                              habit.id
                            )
                          }
                        >
                          <option value="none">None</option>
                          <option value="done">Done</option>
                          <option value="undone">Undone</option>
                        </select>
                      </td>
                      <td>
                        <select
                          id="status"
                          className={habit.dates[5].status}
                          onChange={(event) =>
                            changeStatus(
                              event.target.value,
                              habit.dates[5].date,
                              habit.id
                            )
                          }
                        >
                          <option value="none">None</option>
                          <option value="done">Done</option>
                          <option value="undone">Undone</option>
                        </select>
                      </td>
                      <td className={styles.today}>
                        <select
                          id="status"
                          className={habit.dates[6].status}
                          onChange={(event) =>
                            changeStatus(
                              event.target.value,
                              habit.dates[6].date,
                              habit.id
                            )
                          }
                        >
                          <option value="none">None</option>
                          <option value="done">Done</option>
                          <option value="undone">Undone</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })
        ) : (
          <h1>There is no habit Found!!!</h1>
        )}
      </div>
    </>
  );
}

export default Habits;
