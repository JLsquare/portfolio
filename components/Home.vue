<template>
  <div id="home" class="background">
    <NuxtParticles id="particles" url="particles.json" />
    <nav class="nav-style">
      <ul class="flex items-center">
        <li class="ml-12">
          <a @click="scrollTo('home')" class="menu-item">Home</a>
        </li>
        <li class="ml-12">
          <a @click="scrollTo('about')" class="menu-item">About</a>
        </li>
        <li class="ml-12">
          <a @click="scrollTo('projects')" class="menu-item">Projects</a>
        </li>
        <li class="ml-12">
          <a @click="scrollTo('skills')" class="menu-item">Skills</a>
        </li>
        <li class="ml-12">
          <a @click="scrollTo('experience')" class="menu-item">Experience</a>
        </li>
        <li class="ml-12">
          <button @click="scrollTo('contact')" class="contact-button">
            Contact >
          </button>
        </li>
      </ul>
    </nav>
    <div class="flex flex-col justify-center h-screen ml-96">
      <span class="text-cyan-400 mb-6 text-xl text-left">Hi, my name is</span>
      <span class="name-title">
                {{ name }}
            </span>
      <span class="role-title">
                {{ title }}
            </span>
      <p class="intro-description">
        {{ description.firstPart }}
        <a class="text-cyan-400" :href="description.link">
          {{ description.linkText }}
        </a>
        {{ description.secondPart }}
      </p>
      <button @click="scrollTo('about')" class="get-started-button">
        Get Started ⌵
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo(target) {
      const element = document.getElementById(target);
      if(element) {
        element.scrollIntoView({behavior: "smooth"});
      }
    }
  },
  props: {
    name: String,
    title: String,
    description: {}
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.background {
  @apply relative;
  background: radial-gradient(circle at center bottom, #0f172a, #000000);
}

.nav-style {
  @apply fixed top-0 right-0 left-0 z-50 flex items-center justify-end px-8 py-4 bg-cyan-950 bg-opacity-25
  drop-shadow-[0_0_32px_rgb(0,0,0,0.5)];
}

.menu-item {
  @apply text-white text-xl font-bold transition duration-300 ease-in-out hover:text-cyan-400;
}

.contact-button {
  @apply z-10 bg-transparent p-2 text-xl text-cyan-400 hover:text-white py-2 px-6 border-2 border-cyan-400 rounded-full
  max-w-fit transition duration-300 ease-in-out transform hover:scale-105;
}

.name-title {
  @apply z-10 text-white text-7xl font-bold text-left mb-8 max-w-fit;
}

.role-title {
  @apply z-10 text-slate-400 font-bold text-7xl text-left;
}

.name-title, .role-title {
  animation: fadeIn 1s ease-in-out;
}

.intro-description {
  @apply z-10 text-slate-400 text-2xl max-w-2xl text-left mt-8 opacity-0;
  animation: fadeIn 1.5s ease-in-out forwards;
  animation-delay: 0.5s;
}

.get-started-button {
  @apply bg-transparent z-10 mt-12 p-2 text-xl text-cyan-400 hover:text-white py-4 px-10 border-2 border-cyan-400
  rounded-full max-w-fit transition duration-300 ease-in-out transform hover:bg-cyan-400 hover:bg-opacity-10
  hover:scale-105;
}
</style>
