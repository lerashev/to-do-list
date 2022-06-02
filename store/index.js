// vuex
// store data on a global scale

// state
export const state = () => ({
  // an empty array where we store our tasks
  tasks: [],
});

// mutations
export const mutations = {
  ADD_TASK(state, task) {
    // adding newest first and then the rest tasks that we already have
    // option 1
    state.tasks = [{ content: task, done: false }, ...state.tasks];

    // option 2
    // state.tasks.push({content: task, done: false})

    // optoin 3
    // state.tasks.unshift({content: task, done: false})
  },

  REMOVE_TASK(state, task) {
    // splice --> method adds and/or removes array elements
    // array.splice(index, howmany, item1, ....., itemX)
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },

  TOGGLE_TASK(state, task) {
    // if done is equal to flase, we click it and it changes to true and vice versa
    task.done = !task.done;
  },
};
