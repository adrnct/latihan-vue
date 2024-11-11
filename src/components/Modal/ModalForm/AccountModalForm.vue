<template>
    <form @submit.prevent="submitForm" class="space-y-4">
      <input
        v-model="formData.firstName"
        placeholder="First Name"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.lastName"
        placeholder="Last Name"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.email"
        type="email"
        placeholder="Email"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.phone"
        placeholder="Phone Number"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.birthDate"
        type="date"
        placeholder="Birth Date"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.universityId"
        placeholder="University ID"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.gpa"
        type="number"
        step="0.01"
        placeholder="GPA"
        class="input input-bordered w-full"
        required
      />
      <select v-model="formData.degree" class="select select-bordered w-full">
        <option disabled value="">Select Degree</option>
        <option value="0">D3</option>
        <option value="1">D4</option>
        <option value="2">S1</option>
        <option value="3">S2</option>
        <option value="4">S3</option>
      </select>
      <div class="modal-action">
        <button type="button" @click="closeModal" class="btn">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    props: ["closeModal"],
    emits: ["submit"],
    setup(props, { emit }) {
      const formData = ref({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        birthDate: "",
        universityId: "",
        gpa: 0,
        degree: 0,
      });
  
      const submitForm = () => {
        emit("submit", formData.value);
        props.closeModal();
      };
  
      return { formData, submitForm };
    },
  };
  </script>
  