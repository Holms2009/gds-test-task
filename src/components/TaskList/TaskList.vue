<template>
  <ul class="TaskList">
    <li
      class="TaskList__item"
      v-for="item in itemsList"
      :key="item.id"
      @click="setTaskStatusAction.call(null, item)"
    >
      <span
        :class="[
          'TaskList__check',
          { TaskList__check_checked: item.completed },
        ]"
      />
      <p
        :class="[
          'TaskList__task-text',
          { 'TaskList__task-text_completed': item.completed },
        ]"
      >
        {{ item.text }}
      </p>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TaskList",
  props: ["filter"],
  methods: {
    ...mapActions(["setTaskStatusAction"]),
  },
  computed: {
    ...mapGetters(["getTasks", "getActive", "getCompleted"]),
    itemsList: function () {
      switch (this.filter) {
        case "all":
          return this.getTasks;
        case "active":
          return this.getActive;
        case "completed":
          return this.getCompleted;
        default:
          return this.getTasks;
      }
    },
  },
};
</script>

<style lang="scss">
.TaskList {
  margin: 0;
  padding: 0;
  padding-left: 10px;
  list-style: none;
  color: gray;

  &__item {
    padding: 10px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
  }

  &__check {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 50%;
    background: white;

    &_checked {
      border: 1px solid darkgray;
      background: url("../../assets/images/checked.svg") no-repeat 50% 50%;
      background-size: 60%;
    }
  }

  &__task-text {
    margin: 0;
    font-size: 20px;
    transition: all 0.3s ease;

    &_completed {
      color: lightgray;
      text-decoration: line-through;
    }
  }
}
</style>