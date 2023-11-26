<template>
  <button @click="$emit('update-mode', mode)" class="button">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    mode: String,
  },
};
</script>

<style scoped>
button {
  @apply bg-transparent z-10 mt-12 p-2 text-xl hover:bg-cyan-400 hover:bg-opacity-10 text-cyan-400 hover:text-white
  py-2 px-6 border-2 border-cyan-400 rounded-full max-w-fit mx-4;
}
</style>