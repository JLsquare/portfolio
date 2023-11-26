<template>
  <div class="flex justify-between m-16 mt-48">
    <div class="flex flex-col m-8 mr-16">
      <span class="category-text">
        {{ category.join(" • ") }}
      </span>
      <span class="title-text">
        {{ title }}
      </span>
      <div class="description-box">
        <p class="description-text">
          {{ description }}
        </p>
      </div>
    </div>
    <img class="image-style" :src="image" :alt="title">
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    image: String,
    category: Array,
  },
}
</script>

<style scoped>
.category-text {
  @apply text-cyan-400 text-xl text-left ml-4;
}

.title-text {
  @apply text-white text-3xl mt-4 text-left ml-4;
}

.description-box {
  @apply bg-slate-900 shadow-[0_0_64px_rgba(0,0,0,0.4)] hover:shadow-[0_0_64px_rgba(0,0,0,0.6)] rounded-3xl p-4 mt-4
  transition duration-300 ease-in-out;
}

.description-text {
  @apply z-10 text-slate-400 text-2xl text-left max-w-2xl;
}

.image-style {
  @apply rounded-3xl shadow-[0_0_64px_rgba(0,0,0,0.4)] hover:shadow-[0_0_64px_rgba(0,0,0,0.8)] max-h-96 bg-white
  transition duration-300 ease-in-out transform hover:scale-[1.01];
}
</style>
