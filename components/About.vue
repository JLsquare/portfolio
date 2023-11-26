<template>
  <div id="about" class="about-container">
    <div class="p-32">
      <div class="m-8"></div>
      <span class="title animatable">Who am I?</span>
      <div class="info-section animatable">
        <p class="about-text">
          {{ about }}
        </p>
        <img src="/images/others/picture.png" alt="picture" class="profile-picture animatable">
      </div>
      <button @click="scrollToProjects" class="projects-button">
        My Projects ⌵
      </button>
    </div>
  </div>
  <div class="transition-block"></div>
</template>

<script>
export default {
  methods: {
    scrollToProjects() {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    }
  },
  props: {
    about: String,
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.about-container {
  @apply bg-white flex flex-col text-center items-center z-10 relative;
}

.title {
  @apply z-10 text-cyan-900 text-5xl font-bold text-center opacity-0;
}

.title.start-animation {
  animation: fadeIn 1.5s ease-in-out forwards;
}

.info-section {
  @apply flex justify-between items-center max-w-6xl mt-32 opacity-0;
}

.info-section.start-animation {
  animation: fadeIn 1.5s ease-in-out forwards;
  animation-delay: 0.3s;
}

.about-text {
  @apply z-10 text-cyan-900 text-2xl text-left mr-64;
}

.profile-picture {
  @apply ml-8 rounded-full shadow-[0_0_32px_rgba(0,0,0,0.6)] hover:shadow-[0_0_32px_rgba(0,0,0,0.8)] max-h-96
  transition duration-300 ease-in-out;
}

.projects-button {
  @apply float-left ml-32 bg-transparent mt-12 p-2 text-xl text-cyan-400 py-4 px-10 border-2
  border-cyan-400 rounded-full max-w-fit transition duration-300 ease-in-out transform hover:bg-cyan-400 hover:bg-opacity-10
  hover:scale-105;
}

.transition-block {
  @apply -rotate-3 p-32 w-full ml-8 scale-150 bg-white -mt-44 shadow-2xl;
}
</style>
