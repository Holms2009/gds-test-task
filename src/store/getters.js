const getters = {
  getTasks(state) {
    return state.tasks;
  },
  getActive(state) {
    const active = state.tasks.filter(task => !task.completed);
    return active;
  },
  getCompleted(state) {
    const completed = state.tasks.filter(task => task.completed);
    return completed;
  }
}

export default getters;