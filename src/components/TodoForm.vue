<template>
  <div id="app" class="container">
    <h1>Todo List</h1>
    <ol>
      <li v-for="(todo, index) in todos" :key="todo.id">
        {{ todo }}
        <button @click="editTodo(index, todo)">Edit</button>
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ol>

    <div v-if="!isEditing">
      <input style="width: 1200px" type="text" v-model="todo" />
      <input type="submit" value="Add" @click="storeTodo" />
    </div>
    <div v-else>
      <input style="width: 1200px" type="text" v-model="todo" />
      <input type="submit" value="Update" @click="updateTodo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isEditing: false,
      todo: "",
      todos: [],
      selectedTodo: null,
    };
  },
  methods: {
    storeTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    },

    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, this.todo);
      this.todo = "";
      this.isEditing = false;
    },

    editTodo(index, todo) {
      this.isEditing = true;
      this.todo = todo;
      this.selectedIndex = index;
    },
  },
};
</script>
