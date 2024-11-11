<template>
  <button class="btn btn-sm btn-primary" @click="$emit('open')">Add {{ context }}</button>
</template>

<script>
export default {
  props: ["context"],
  name: 'AddModalButton',
};
</script>
