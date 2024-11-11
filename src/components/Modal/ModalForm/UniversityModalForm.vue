<template>
    <form @submit.prevent="submitForm" class="space-y-4">
      <input
        v-model="formData.name"
        placeholder="University Name"
        class="input input-bordered w-full"
        required
      />
      <div class="modal-action">
        <button type="button" @click="closeModal" class="btn">Cancel</button>
        <button type="submit" class="btn btn-primary">
          {{ isEdit ? "Update" : "Add" }}
        </button>
      </div>
    </form>
  </template>
  
  <script>
  import { ref, watch } from "vue";
  
  export default {
    props: ["isEdit", "currentData", "closeModal"],
    emits: ["submit"],
    setup(props, { emit }) {
      const formData = ref({ name: "" });
  
      watch(
        () => props.currentData,
        (newVal) => {
          if (props.isEdit && newVal) {
            formData.value = { ...newVal };
          } else {
            formData.value = { name: "" };
          }
        },
        { immediate: true }
      );
  
      const submitForm = () => {
        emit("submit", formData.value);
        props.closeModal();
      };
  
      return { formData, submitForm };
    },
  };
  </script>
  