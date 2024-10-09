<template>
  <!-- <div data-theme="cupcake" class="h-screen flex items-center justify-center">
    <Login />
  </div> -->
  <router-view></router-view>
</template>

<script>
import Login from "./pages/auth/Login.vue";
import Dashboard from "./pages/Dashboard.vue";

export default {
  components: {
    Dashboard,
    Login
  },
  setup() {
    const myData = "hello world!";
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurstday",
      "Friday",
      "Sunday",
    ];
    return { myData, days };
  },
};
</script>

<style lang="scss" scoped></style>
