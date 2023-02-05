//this function will use for add habit
export const addHabit = (habit) => {
  return {
    type: "ADD_HABIT",
    payload: {
      id: new Date().getTime().toString(),
      habit: habit.habit,
      description: habit.description,
      dates: habit.dates,
    },
  };
};

//this function will call when user click on delete button
export const deleteHabit = (id) => {
  return {
    type: "DELETE_HABIT",
    id,
  };
};

//this function will call when user want to update status of the habit for that day
export const updateStatus = (data) => {
  return {
    type: "UPDATE_STATUS",
    data,
  };
};
