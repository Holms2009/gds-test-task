<template>
  <form class="TaskInput" action="GET">
    <input class="TaskInput__submit" type="submit" name="submit" value="" />
    <input
      class="TaskInput__field"
      type="text"
      name="task"
      :placeholder="placeholder"
      v-model="inputText"
    />
  </form>
</template>

<script>
export default {
  name: "TaskInput",
  props: ["placeholder"],
  data() {
    return {
      inputText: "",
    };
  },
};
</script>

<style lang='scss'>
.TaskInput {
  padding-left: 20px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid lightgrey;
  font-size: 20px;

  &__submit {
    margin-right: 5px;
    width: 15px;
    height: 15px;
    background: url("../../assets/images/down-arrow.svg") no-repeat 50% 50%;
    background-size: cover;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }

  &__field {
    padding: 10px 10px;
    width: 100%;
    border: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-style: italic;
      color: lightgrey;
    }
  }
}
</style>