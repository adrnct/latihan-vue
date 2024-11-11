<template>
  <div v-if="isOpen" class="modal modal-open">
    <div class="modal-box">
      <h2 class="font-bold text-lg mb-4">
        {{ isEdit ? `Edit ${context}` : `Add ${context}` }}
      </h2>
      <div v-if="context == 'University'">
        <UniversityModalForm
          :isEdit="isEdit"
          :currentData="currentData"
          :closeModal="closeModal"
          @submit="submitForm"
        />
      </div>
      <div v-if="context == 'Account'">
        <AccountModalForm :closeModal="closeModal" @submit="submitForm" />
      </div>
    </div>
  </div>
</template>

<script>
import AccountModalForm from "./ModalForm/AccountModalForm.vue";
import UniversityModalForm from "./ModalForm/UniversityModalForm.vue";

export default {
  props: ["isOpen", "isEdit", "currentData", "context"],
  emits: ["close", "submit"],
  components: {
    UniversityModalForm,
    AccountModalForm,
  },
  methods: {
    submitForm(data) {
      this.$emit("submit", data);
      this.closeModal();
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
