import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/auth/Login.vue";
import Home from "./components/Dashboard/Home.vue";
import Setting from "./components/Dashboard/Setting.vue";
import User from "./components/Dashboard/User.vue";
import Dashboard from "./pages/Dashboard.vue";

const routes = [
  { path: "/login", component: Login, props: true },
  {
    path: "/dashboard",
    component: Dashboard,
    props: true,
    children: [
      { path: "", component: Home },
      { path: "setting", component: Setting },
      { path: "user", component: User },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
