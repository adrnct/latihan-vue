<template>
  <div>
    <div class="flex justify-between items-center mb-2">
      <h1 class="text-2xl font-bold">University Table</h1>
      <AddModalButton context="University" @open="openModal(false)" />
    </div>
    <div class="divider"></div>
    <Modal
      :isOpen="isModalOpen"
      :isEdit="isEdit"
      :currentData="currentUniversity"
      context="University"
      @close="closeModal"
      @submit="handleFormSubmit"
    />
    <Table
      :items="universities"
      :openModal="openModal"
      @edit="(university) => openModal(true, university)"
      @delete="deleteUniversity"
      context="University"
      :columns="['Id', 'University Name']"
    />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import {
  getUniversities,
  addUniversity,
  updateUniversity,
  deleteUniversity as deleteUniversityAPI,
} from "../../services/action-service.js";
import Modal from "../Modal/Modal.vue";
import AddModalButton from "../Modal/AddModalButton.vue";
import Table from "../Table.vue";

export default {
  components: {
    Table,
    Modal,
    AddModalButton,
  },
  setup() {
    const universities = ref([]);
    const isModalOpen = ref(false);
    const isEdit = ref(false);
    const currentUniversity = ref(null);

    const fetchUniversities = async () => {
      universities.value = await getUniversities();
    };

    const openModal = (editMode, university = null) => {
      isEdit.value = editMode;
      currentUniversity.value = university;
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    const handleFormSubmit = async (universityData) => {
      if (isEdit.value) {
        await updateUniversity(currentUniversity.value.id, universityData);
      } else {
        await addUniversity(universityData);
      }
      await fetchUniversities();
    };

    const deleteUniversity = async (id) => {
      await deleteUniversityAPI(id);
      await fetchUniversities();
    };
    onMounted(() => {
      fetchUniversities();
    });

    return {
      universities,
      isModalOpen,
      isEdit,
      currentUniversity,
      openModal,
      closeModal,
      handleFormSubmit,
      deleteUniversity,
    };
  },
};
</script>
