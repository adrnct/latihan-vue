<template>
  <div
    v-if="isOpen"
    class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    @click.self="closeModal"
  >
    <dialog class="modal max-w-full" ref="dialog" open>
      <div class="modal-box">
        <button
          type="button"
          class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          @click="closeModal"
        >
          ✕
        </button>
        <!-- Tangkap event submit dari ModalFormUniversity -->
        <ModalFormUniversity @submit="handleAddUniversity" />
      </div>
    </dialog>
  </div>
</template>

<script>
import ModalFormUniversity from "./ModalForm/ModalFormUniversity.vue";

export default {
  name: "Modal",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close"); // Emit event untuk menutup modal
    },
    handleAddUniversity(university) {
      this.closeModal(); // Tutup modal setelah menambahkan universitas
      this.$emit("universityAdded", university); // Emit event untuk menambahkan universitas ke komponen lain
    },
  },
  components: {
    ModalFormUniversity,
  },
};
</script>
