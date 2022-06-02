<template>
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="main-content">{{ task.content }}</div>
    <div class="call-to-action-buttons">
      <button v-on:click="toggleDone">{{ task.done ? "Undo" : "Done" }}</button>
      <button v-on:click="removeTask" class="delete-btn">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    toggleDone() {
      this.$store.commit("TOGGLE_TASK", this.task);
    },

    removeTask() {
      this.$store.commit("REMOVE_TASK", this.task);
    },
  },
};
</script>

<style></style>
