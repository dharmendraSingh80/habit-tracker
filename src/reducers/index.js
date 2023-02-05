import { combineReducers } from "redux";

//initial redux state
const initialState = {
  list: [],
};

// this function will execute every action called from actions folder
//this is reducer function
export const habitReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HABIT":
      //for adding habit to redux state
      const { id, habit, description, dates } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            habit: habit,
            description: description,
            dates: dates,
          },
        ],
      };

    //for deleting habit
    case "DELETE_HABIT":
      const newList = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    //updating status of habit
    case "UPDATE_STATUS":
      const data = action.data;
      //finding habit which user want to update
      let habitToBeUpdated = state.list.filter((item) => item.id === data.id);
      let habitObjectToBeUpdated = habitToBeUpdated[0];
      /*
       * iterating through the date object and as soon as the date matches the payload date we change the completion status according to the current status
       */
      let newDateArray = habitObjectToBeUpdated.dates.map((date) => {
        if (date.date === data.date) {
          date.status = data.status;
        }
        // returning the new date array
        return date;
      });
      //updating dates array of th habit
      let newHabitsArray = state.list.map((habit) => {
        if (data.id === habit.id) {
          habit.dates = newDateArray;
        }
        return habit;
      });
      //updating list of habits
      return {
        ...state,
        list: newHabitsArray,
      };
    default:
      return state;
  }
};

export default combineReducers({
  habitReducers,
});
