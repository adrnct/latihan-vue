<template>
  <div class="flex h-screen">
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
import Navbar from "../components/Navbar.vue";
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

<style lang="scss" scoped>
/* Tambahkan styling khusus jika diperlukan */
</style>
