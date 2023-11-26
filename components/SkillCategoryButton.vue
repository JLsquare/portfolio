<template>
  <div class="category-button">
    <span class="category-text">
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  }
}
</script>

<style scoped>
.category-button {
  @apply p-8 cursor-pointer rounded-l-2xl -mr-8 transition duration-300 ease-in-out;
}

.category-button.active {
  @apply bg-white
}

.category-text {
  @apply text-cyan-400 font-bold text-xl text-center w-full whitespace-nowrap;
}
</style>