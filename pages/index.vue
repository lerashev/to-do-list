<template>
  <div class="main-container">
    <h1>ToDo List</h1>
    <p class="main-text">Create a list of tasks</p>
    <div class="create-new-task">
      <input
        class="input-field"
        type="text"
        v-model="newTask"
        placeholder="Add a new task"
        @keypress.enter="addNewTask"
      />
      <button class="call-to-action-btn" v-on:click="addNewTask">Add</button>
    </div>
    <div class="tasks">
      <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },

  methods: {
    addNewTask() {
      // check if new task exists
      if (this.newTask) {
        this.$store.commit("ADD_TASK", this.newTask);
        // newTask will equal empty string after adding new task;
        // reset input
        this.newTask = "";
      }
    },
  },
};
</script>
