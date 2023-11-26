<template>
  <a :href="link" class="contact">
    <img class="contact-image" :src="image" :alt="name">
  </a>
</template>

<script>
export default {
  props: {
    name: String,
    link: String,
    image: String
  }
}
</script>

<style scoped>
.contact {
  @apply p-4 m-4 bg-white rounded-2xl shadow-[0_0_64px_rgb(0,0,0,0.2)] hover:shadow-[0_0_64px_rgb(0,0,0,0.3)]
  transition duration-300 ease-in-out transform hover:scale-105;
}

.contact-image {
  @apply h-24 w-24 max-w-xl bg-transparent;
}
</style>