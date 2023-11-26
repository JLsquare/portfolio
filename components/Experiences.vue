<template>
  <div id="experience" class="experience">
    <div class="p-32 w-full"></div>
    <span class="experience-title">My little experience</span>
    <div id="experience-list" class="z-10">
      <Experience
          v-for="(experience, index) in experiences"
          :key="index"
          :title="experience.title"
          :description="experience.description"
          :category="experience.category"
          :image="experience.image"
      ></Experience>
    </div>
    <div class="p-32 w-full"></div>
  </div>
  <div class="transition-block"></div>
</template>

<script>
import Experience from "@/components/Experience.vue";

export default {
  name: "Experiences",
  components: {Experience},
  props: {
    experiences: Array,
  },
}
</script>

<style scoped>
.experience {
  @apply bg-slate-900 flex flex-col items-center text-center;
}

.experience-title {
  @apply z-10 text-white text-5xl font-bold;
}

.transition-block {
  @apply -rotate-3 p-32 w-full ml-8 scale-150 bg-white;
}
</style>
