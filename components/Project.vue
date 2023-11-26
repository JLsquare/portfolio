<template>
  <div class="flex justify-between m-16 mt-48">
    <template v-if="!right">
      <img v-if="isImage" :src="image" alt="project" class="media" />
      <video v-else autoplay loop :src="image" muted class="media"></video>
    </template>

    <div :class="`project-info animatable ${right ? 'right mr-16' : 'left ml-16'}`">
      <span :class="`project-category ${right ? 'text-left ml-4' : 'text-right mr-4'}`">
        {{ category.join(" • ") }}
      </span>
      <span :class="`project-title ${right ? 'text-left ml-4' : 'text-right mr-4'}`">
        {{ title }}
      </span>
      <div class="project-description">
        <p :class="right ? 'text-left ml-4' : 'text-right mr-4'">
          {{ description }}
        </p>
      </div>

      <span v-if="right" class="project-tools justify-start">
        {{ tools.join(" • ") }}
        <a :href="github" class="w-8 mx-4" v-if="github">
          <img src="/images/others/github.png" alt="GitHub" class="w-8"/>
        </a>
      </span>
      <span v-else class="project-tools justify-end">
        <a :href="github" class="w-8 mx-4" v-if="github">
          <img src="/images/others/github.png" alt="GitHub" class="w-8"/>
        </a>
        {{ tools.join(" • ") }}
      </span>
    </div>

    <template v-if="right">
      <img v-if="isImage" :src="image" alt="project" class="media" />
      <video v-else autoplay loop :src="image" muted class="media"></video>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    image: String,
    category: Array,
    tools: Array,
    right: Boolean,
    github: String
  },
  computed: {
    isImage() {
      return /\.(jpg|jpeg|png|gif)$/i.test(this.image);
    }
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

.media {
  @apply rounded-3xl shadow-media max-h-96 object-cover
  transition duration-300 ease-in-out transform hover:scale-[1.01];
  animation: fadeIn 1s ease-in-out forwards;
}

.shadow-media {
  box-shadow: 0 0 64px rgba(0,0,0,0.4);
}

.shadow-media:hover {
  box-shadow: 0 0 64px rgba(0,0,0,0.8);
}

.project-info {
  @apply flex flex-col m-8 mt-4;
  opacity: 0;
}

.project-info.left {
  transform: translateX(-20px);
}

.project-info.right {
  transform: translateX(20px);
}

.project-info.start-animation {
  animation: fadeIn 1s ease-in-out forwards,
  slideInLeft 1s ease-in-out forwards;
}

.project-info.right.start-animation {
  animation-name: fadeIn, slideInRight;
}

.project-category {
  @apply text-cyan-400 text-xl;
}

.project-title {
  @apply text-white text-3xl mt-4;
}

.project-description {
  @apply bg-slate-900 shadow-media rounded-3xl p-4 mt-4 z-10 text-slate-400 text-xl transition duration-300 ease-in-out;
}

.project-tools {
  @apply flex items-center text-cyan-400 text-xl m-4;
}
</style>
