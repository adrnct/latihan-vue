<template>
    <div
      :class="[ 
        'transition-all duration-300 bg-gray-800 text-white flex flex-col',
        isSidebarOpen ? ' w-60' : ' w-16'
      ]"
    >
      <!-- Sidebar Content -->
      <nav class="flex flex-col mt-16 w-full">
        <RouterLink to="/dashboard" class="flex items-center hover:bg-gray-700 w-full h-16">
          <HomeIcon class="w-6 h-6 ml-4" />
          <span v-if="isSidebarOpen" class="ml-4">Home</span>
        </RouterLink>
  
        <RouterLink to="/dashboard/user" class="flex items-center hover:bg-gray-700 w-full h-16">
          <UserIcon class="w-6 h-6 ml-4" />
          <span v-if="isSidebarOpen" class="ml-4">Profile</span>
        </RouterLink>
  
        <RouterLink to="/dashboard/setting" class="flex items-center hover:bg-gray-700 w-full h-16">
          <CogIcon class="w-6 h-6 ml-4" />
          <span v-if="isSidebarOpen" class="ml-4">Settings</span>
        </RouterLink>
      </nav>
    </div>
  </template>
  
  <script>
  import { MenuIcon, XIcon, HomeIcon, UserIcon, CogIcon } from "@heroicons/vue/outline";
  
  export default {
    name: 'SideBar',
    props: {
      isSidebarOpen: {
        type: Boolean,
        required: true,
      },
      toggleSidebar: {
        type: Function,
        required: true,
      },
    },
    components: {
      MenuIcon,
      XIcon,
      HomeIcon,
      UserIcon,
      CogIcon,
    },
  };
  </script>
  
  <style scoped>
  /* Tambahkan styling khusus jika diperlukan */
  </style>
  