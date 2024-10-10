<template>
  <div>
    <div v-if="loading">Loading...</div>
    <AddModalButton @open="openModal" />
    <Modal
      :isOpen="isModalOpen"
      @close="closeModal"
      @universityAdded="addUniversity"
    />
    <Table v-if="!loading && !error && data.length" :items="data" :openModal="openModal" context="University"/>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { addUniversities, getUniversities } from "../../services/action-service";
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
    const data = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const isModalOpen = ref(false);

    const fetchUniversities = async () => {
      const universities = await getUniversities();
      data.value = universities;
      loading.value = false;
    };

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    const addUniversity = (university) => {
      const addData = async () => {
        const univ = await addUniversities(university)
        data.value.push(univ.data);
      }

      addData();
    };

    onMounted(() => {
      fetchUniversities();
    });

    return {
      data,
      loading,
      error,
      isModalOpen,
      openModal,
      closeModal,
      addUniversity,
      context
    };
  },
};
</script>
