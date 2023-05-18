import Vue from "vue";
import VueRouter from "vue-router";
import Task1 from "@/views/Task-1.vue";
import Task2 from "@/views/Task-2.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "task1",
      component: Task1,
    },
    {
      path: "/task-2",
      name: "task2",
      component: Task2,
    },
  ],
});

export default router;
