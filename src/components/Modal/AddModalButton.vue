<template>
  <button @click="openModal" class="btn">Open Modal</button>
</template>

<script>
export default {
  name: 'AddModalButton',
  methods: {
    openModal() {
      this.$emit('open');
    },
  },
};
</script>

