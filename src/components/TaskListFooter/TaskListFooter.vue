<template>
  <div class="TaskListFooter">
    <div class="TaskListFooter__counter">
      <span class="TaskListFooter__number">{{ getActive.length }}</span>
      <span>{{
        getActive.length % 10 === 1 && getActive.length !== 11
          ? "item"
          : "items" + " left"
      }}</span>
    </div>
    <div class="TaskListFooter__links">
      <router-link
        :class="[
          'TaskListFooter__link',
          { TaskListFooter__link_active: $route.name === 'all' },
        ]"
        :to="{ name: 'all', params: { filter: 'all' } }"
        >All</router-link
      >
      <router-link
        :class="[
          'TaskListFooter__link',
          { TaskListFooter__link_active: $route.name === 'active' },
        ]"
        :to="{ name: 'active', params: { filter: 'active' } }"
        >Active</router-link
      >
      <router-link
        :class="[
          'TaskListFooter__link',
          { TaskListFooter__link_active: $route.name === 'completed' },
        ]"
        :to="{ name: 'completed', params: { filter: 'completed' } }"
        >Completed</router-link
      >
    </div>
    <span
      :class="[
        'TaskListFooter__clear',
        { TaskListFooter__clear_visible: getCompleted.length },
      ]"
      @click="clearCompletedAction"
      >Clear completed</span
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TaskListFooter",
  methods: {
    ...mapActions(["clearCompletedAction"]),
  },
  computed: {
    ...mapGetters(["getActive", "getCompleted"]),
  },
};
</script>

<style lang="scss">
.TaskListFooter {
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: grey;

  &__counter {
    display: flex;
    gap: 5px;
  }

  &__links {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  &__link {
    padding: 3px 5px;
    text-decoration: none;
    color: grey;

    &:visited {
      color: grey;
    }

    &:hover {
      text-decoration: underline;
    }

    &_active {
      border: 1px solid lightgray;
      border-radius: 2px;
    }
  }

  &__clear {
    opacity: 0;
    pointer-events: none;
    cursor: pointer;
    transition: opacity 0.5s ease;

    &:hover {
      text-decoration: underline;
    }

    &_visible {
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>