<template>
  <div class="skill">
    <img :src="image" alt="skill">
    <span class="skill-name">
      {{ name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
  }
}
</script>

<style scoped>
.skill {
  @apply flex flex-col items-center p-4 w-32 transition duration-300 ease-in-out transform hover:scale-105;
}
</style>