<template>
  <div class="w-full max-w-screen-xl mx-auto mt-5">
    <router-link class="text-lg mb-4 text-red-600" :to="{ name: 'task2' }"
      >Go To Task2</router-link
    >
    <ul>
      <li><a class="link" href="#">link 1</a></li>
      <li><a class="link" href="#">link 2</a></li>
      <li><a class="link" href="#">link 3</a></li>
    </ul>
  </div>
</template>
<style>
li {
  margin-bottom: 10px;
}

.link {
  display: inline-block;
  color: #000;
  text-decoration: none;
}

.link::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #000;
  transition: width 0.3s;
}

.link:hover::after {
  width: 100%;
}
</style>
