import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//imporing function to add and delete habit i n state
import { addHabit, deleteHabit } from "../actions";
//importing style for this component
import styles from "../styles/home.module.css";

function Home() {
  //storing habit name in local state using useState hook
  const [habit, setHabit] = useState("");
  //storing habit description in local state using useState hook
  const [desc, setDesc] = useState("");
  //getting habit from redux-store
  const habits = useSelector((state) => state.habitReducers.list);
  // console.log("habits", habits);
  const dispatch = useDispatch();

  //adding habit to redux state by calling dispatch function
  const addYourHabitOnClick = () => {
    if (!habit || !desc) {
      return;
    }
    // This function is used for formatting the date in DD/MM/YY format
    function formatDate(date) {
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      var yyyy = date.getFullYear().toString().substring(2);
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      date = dd + "/" + mm + "/" + yyyy;
      return date;
    }

    // This function is responsible for returning the array of last 7 day dates
    function Last7Days() {
      // Creating 7 variables for 7 days; At this point all the variables is assigned as today's date
      var today = new Date();
      var oneDayAgo = new Date(today);
      var twoDaysAgo = new Date(today);
      var threeDaysAgo = new Date(today);
      var fourDaysAgo = new Date(today);
      var fiveDaysAgo = new Date(today);
      var sixDaysAgo = new Date(today);

      // setDate is responsible for setting up the appropriate value for last 6 days
      oneDayAgo.setDate(today.getDate() - 1);
      twoDaysAgo.setDate(today.getDate() - 2);
      threeDaysAgo.setDate(today.getDate() - 3);
      fourDaysAgo.setDate(today.getDate() - 4);
      fiveDaysAgo.setDate(today.getDate() - 5);
      sixDaysAgo.setDate(today.getDate() - 6);

      // formatting the date accordingly as we want in our project
      var result0 = formatDate(today);
      var result1 = formatDate(oneDayAgo);
      var result2 = formatDate(twoDaysAgo);
      var result3 = formatDate(threeDaysAgo);
      var result4 = formatDate(fourDaysAgo);
      var result5 = formatDate(fiveDaysAgo);
      var result6 = formatDate(sixDaysAgo);

      // Creating the array of last 7 days and returing it
      var result = [
        result0,
        result1,
        result2,
        result3,
        result4,
        result5,
        result6,
      ];
      return result;
    }

    // Creating the habit object with all the info which is required for creating different functionalities
    let habitToBeAdded = {
      id: Date.now(),
      habit: habit,
      description: desc,
      dates: [
        { date: Last7Days()[6], status: "none" },
        { date: Last7Days()[5], status: "none" },
        { date: Last7Days()[4], status: "none" },
        { date: Last7Days()[3], status: "none" },
        { date: Last7Days()[2], status: "none" },
        { date: Last7Days()[1], status: "none" },
        { date: Last7Days()[0], status: "none" },
      ],
    };
    // Setting up the habit and discription state to empty string so that input box can get empty
    setHabit("");
    setDesc("");

    // dispatching the data [habitToBeAdded] object to addHabit (reducer)
    dispatch(addHabit(habitToBeAdded));
  };

  return (
    <div className="home">
      <div className="child-div text-center">
        <figure>
          <h5 className={styles.subTitle}>Add Your Habit Here</h5>
        </figure>
      </div>

      <div className={`${styles.main_div} bg-light`}>
        <form className="col-8 mx-auto my-4">
          <div className="form-group row my-2">
            <label htmlFor="task" className="col-sm-2 col-form-label">
              Habit Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="taskName"
                placeholder="Enter the habit..."
                value={habit}
                onChange={(e) => setHabit(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="=taskDesc"
                placeholder="Enter the description..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
            </div>
          </div>
        </form>

        <div className="addItems d-grid gap-2 col-3 mx-auto">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={addYourHabitOnClick}
          >
            Add Habit
          </button>
        </div>

        {/* using map funciton to display all the habits added till now */}
        <div className="showList my-2  ">
          {habits.map((habit) => {
            return (
              <div
                className="eachItem border border-secondary rounded col-8 mx-auto d-flex justify-content-between p-3 my-1 bg-info"
                key={habit.id}
              >
                <span>
                  <h5>{habit.habit + " (" + habit.dates[6].date + ")"}</h5>
                  <sub>{habit.description}</sub>
                </span>
                <i
                  className="fa-solid fa-trash-can fa-large my-4"
                  title="Delete Item"
                  onClick={() =>
                    dispatch(
                      deleteHabit(habit.id),
                      alert("Successfully Deleted")
                    )
                  }
                ></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
