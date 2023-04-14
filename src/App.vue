<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><RouterLink to="/">Task 1 and 3</RouterLink></li>
        <li><RouterLink to="/user">Task 2</RouterLink></li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

h1 {
  margin: 0;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  margin: 0 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
}
</style>
