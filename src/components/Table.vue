<template>
  <div v-if="items.length">
    <div class="mb-4 flex justify-between items-center">
      <!-- Dropdown untuk memilih jumlah item per halaman -->
      <div>
        <label>Show: </label>
        <select
          id="itemsPerPage"
          v-model="itemsPerPage"
          class="select select-bordered select-sm"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
        </select>
      </div>

      <!-- Search bar di pojok kanan dengan label sejajar -->
      <div class="ml-auto flex items-center">
        <label class="mr-2">Search:</label>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search..."
          class="input input-sm input-bordered w-full"
        />
      </div>
    </div>

    <table
      class="table table-zebra table-auto w-full border-collapse border border-gray-200"
    >
      <thead>
        <tr>
          <th>No.</th>
          <th v-for="(column, key) in columns" :key="key">
            {{ column }}
          </th>
          <th v-if="context == 'University'">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedItems" :key="item.id">
          <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
          <td v-for="(value, key) in item" :key="key">{{ value }}</td>
          <td v-if="context == 'University'">
            <button
              @click="openModal(true, item)"
              class="btn btn-sm btn-primary"
            >
              Edit
            </button>
            <button @click="deleteItem(item.id)" class="btn btn-sm btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Menampilkan informasi di bawah tabel -->
    <div class="flex justify-between items-center mt-4">
      <span>
        Showing {{ (currentPage - 1) * itemsPerPage + 1 }} to
        {{ (currentPage - 1) * itemsPerPage + paginatedItems.length }} of
        {{ filteredItems.length }} entries
      </span>

      <!-- Pagination -->
      <div class="flex items-center join">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="join-item btn"
        >
          Previous
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="['join-item btn', currentPage === page ? 'btn-active' : '']"
        >
          {{ page }}
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="join-item btn"
        >
          Next
        </button>
      </div>
    </div>
  </div>

  <div v-else>
    <p>No data available.</p>
  </div>
</template>

<script>
export default {
  props: ["items", "openModal", "context", "columns"],
  emits: ["delete"],
  data() {
    return {
      searchQuery: "",
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    filteredItems() {
      const searchFields = this.getSearchFields();
      return this.items.filter((item) => {
        return searchFields.some((field) => {
          const value = item[field];
          return (
            value &&
            typeof value === "string" &&
            value.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        });
      });
    },
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredItems.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    getSearchFields() {
      return this.items.length > 0 ? Object.keys(this.items[0]) : [];
    },
    deleteItem(id) {
      this.$emit("delete", id);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
  },
};
</script>
