<template>
  <div class="flex justify-between items-center mb-2">
    <h1 class="text-2xl font-bold">Account Table</h1>
    <AddModalButton context="Account" @open="openModal(false)" />
  </div>
  <div class="divider"></div>
  <Modal
    :isOpen="isModalOpen"
    context="Account"
    @close="closeModal"
    @submit="handleFormSubmit"
  />
  <Table
    :items="accounts"
    context="Account"
    :columns="[
      'NIK',
      'Full Name',
      'Email',
      'Phone',
      'Birth of Date',
      'University Name',
      'GPA',
      'Degree',
    ]"
  />
</template>

<script>
import { ref, onMounted } from "vue";
import Table from "../Table.vue";
import { addAccount, getAccount } from "../../services/action-service.js";
import Modal from "../Modal/Modal.vue";
import AddModalButton from "../Modal/AddModalButton.vue";

export default {
  name: "Setting",
  components: {
    Table,
    Modal,
    AddModalButton
  },
  setup() {
    const accounts = ref([]);
    const isModalOpen = ref(false);

    const fetchAccounts = async () => {
      accounts.value = await getAccount();
    };

    const openModal = (editMode, account ) => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    const handleFormSubmit = async(accountData) => {
      await addAccount(accountData)
      await fetchAccounts()
    };

    onMounted(() => {
      fetchAccounts();
    });
    return { 
      accounts,
      isModalOpen,
      openModal,
      closeModal,
      handleFormSubmit
     };
  },
};
</script>
