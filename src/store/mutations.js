const mutations = {
  setTasks(state, payload) {
    state.tasks = payload;
  },
  clearCompleted(state) {
    const cleared = state.tasks.filter(task => !task.completed);
    state.tasks = cleared;
  },
  setTaskStatus(state, payload) {
    const tasks = state.tasks;

    tasks.forEach(task => {
      if (task.id === payload.id) task.completed = !task.completed;
    })

    state.tasks = tasks;
  }
}

export default mutations;