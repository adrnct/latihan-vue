<template>
  <table class="table table-zebra table-auto w-full">
    <thead>
      <tr>
        <!-- Membuat header tabel secara dinamis -->
        <th v-for="(value, key) in items[0]" :key="key" class="px-4 py-2">
          {{ key }}
        </th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      <!-- Membuat isi tabel secara dinamis -->
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="(value, key) in item" :key="key" class="border px-4 py-2">
          {{ value }}
        </td>
        <div v-if="context == 'University'">
          <td>
            <button @click.prevent="openModal(item)">Edit</button> | Delete
          </td>
        </div>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    items: {
      type: Array,
      required: true,
    },
    openModal: {
      type: Function,
      required: true,
    },
    context: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
/* Styling tambahan jika diperlukan */
</style>
