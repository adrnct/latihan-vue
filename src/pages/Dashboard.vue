<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <SideBar :isSidebarOpen="isSidebarOpen" :toggleSidebar="toggleSidebar" />

    <!-- Main Content Wrapper -->
    <div class="flex flex-col flex-grow">
      <!-- Navbar -->
      <Navbar :isSidebarOpen="isSidebarOpen" :toggleSidebar="toggleSidebar" />

      <!-- Main Content -->
      <div class="flex-grow p-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Navbar from "../components/NavBar.vue";
import { ref } from "vue";
import Home from "../components/Dashboard/Home.vue";
import Setting from "../components/Dashboard/Setting.vue";
import User from "../components/Dashboard/User.vue";

export default {
  components: {
    SideBar,
    Navbar,
    Home,
    Setting,
    User,
  },
  setup() {
    const isSidebarOpen = ref(false);

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    return { isSidebarOpen, toggleSidebar };
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
</style>
