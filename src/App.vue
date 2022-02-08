<template>
  <div id="app">
    <task-input
      placeholder="What needs to be done?"
      @submit.native.prevent="handleTaskAdd"
    />
    <router-view />
    <task-list-footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { nanoid } from "nanoid";

import TaskInput from "./components/TaskInput/TaskInput.vue";
import TaskListFooter from "./components/TaskListFooter/TaskListFooter.vue";

export default {
  name: "App",
  methods: {
    ...mapActions(["setTasksAction"]),
    handleTaskAdd: function (evt) {
      const form = evt.currentTarget;
      const data = new FormData(form);
      const currentTasks = this.getTasks;

      currentTasks.push({
        id: nanoid(6),
        text: data.get("task"),
        completed: false,
      });
      this.setTasksAction(currentTasks);
      form.reset();
    },
  },
  computed: {
    ...mapGetters(["getTasks", "getCompleted"]),
  },
  components: {
    TaskInput,
    TaskListFooter,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Montserrat";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Montserrat";
  font-weight: 500;
  font-style: normal;
  font-display: auto;
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "Montserrat";
  font-weight: 600;
  font-style: normal;
  font-display: auto;
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat-SemiBold.ttf") format("truetype");
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 25vw;
}
</style>
