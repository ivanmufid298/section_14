<template>
  <div id="app">
    <TodoForm></TodoForm>
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";

export default {
  name: "App",
  components: {
    TodoForm,
  },
};
</script>

<style>
#app {
  display: block;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
h1 {
  padding-top: 40px;
}
</style>
