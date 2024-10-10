<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="universityName">University Name:</label>
      <input
        v-model="universityName"
        id="universityName"
        type="text"
        required
      />
      <!-- Tambahkan event @click pada tombol agar handleSubmit tetap dipanggil -->
      <button type="button" class="btn" @click="handleSubmit">Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ModalFormUniversity",
  setup(props, { emit }) {
    const universityName = ref(""); // Membuat reaktif variabel untuk menyimpan nama universitas

    const handleSubmit = () => {
      if (universityName.value) {
        const university = {
          name: universityName.value, // Membuat objek university dengan nama yang diinput
        };
        emit("submit", university); // Emit event submit dengan objek university
        universityName.value = ""; // Reset input setelah pengiriman
      }
    };

    return {
      universityName,
      handleSubmit, // Menyediakan fungsi untuk template
    };
  },
};
</script>
