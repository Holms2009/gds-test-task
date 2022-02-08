const actions = {
  setTasksAction({ commit }, payload) {
    commit('setTasks', payload);
  },
  clearCompletedAction({ commit }) {
    commit('clearCompleted');
  },
  setTaskStatusAction({ commit }, payload) {
    commit('setTaskStatus', payload);
  }
}

export default actions;