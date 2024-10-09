<template>
    <nav class="bg-gray-800 text-white flex justify-between items-center p-2">
      <!-- Toggle Button di Pojok Kiri -->
      <button
        @click="toggleSidebar"
        class="btn btn-square btn-ghost text-white"
        style="width: 48px; height: 48px;"
      >
        <!-- Heroicons Menu/Close Icon -->
        <MenuIcon v-if="!isSidebarOpen" class="w-6 h-6" />
        <XIcon v-else class="w-6 h-6" />
      </button>
  
      <div class="text-lg font-bold">My Application</div>
  
      <!-- Logo User di Pojok Kanan -->
      <div class="flex items-center">
        <img
          src="https://via.placeholder.com/40" 
          alt="User Logo"
          class="rounded-full"
        />
      </div>
    </nav>
  </template>
  
  <script>
  import { MenuIcon, XIcon } from "@heroicons/vue/outline"; // Import icons
  
  export default {
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
    },
  };
  </script>
  
  <style scoped>
  /* Tambahkan styling khusus jika diperlukan */
  </style>
  