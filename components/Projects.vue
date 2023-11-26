<template>
  <div id="projects" class="projects"></div>
  <div class="projects-container">
    <span class="projects-title">Some of my projects</span>
    <div class="flex justify-between max-w-fit">
      <ProjectCategoryButton
          v-for="(category, index) in projectButtons"
          :key="index"
          :label="category.label"
          :mode="mode"
          @click="mode = category.mode"
      ></ProjectCategoryButton>
    </div>
    <div class="z-10 w-3/4">
      <Project
          v-for="(project, index) in filteredProjects"
          :key="`${mode}-${index}`"
          :title="project.title"
          :description="project.description"
          :right="index % 2 === 0"
          :category="project.category"
          :tools="project.tools"
          :image="project.image"
          :github="project.github"
      ></Project>
    </div>
    <div class="w-full p-32"></div>
  </div>
  <div class="transition-block"></div>
</template>

<script>
import Project from "@/components/Project.vue";
import ProjectCategoryButton from "@/components/ProjectCategoryButton.vue";

export default {
  components: {ProjectCategoryButton, Project},
  props: {
    projects: Array,
    projectButtons: Array,
  },
  data() {
    return {
      mode: "All",
    }
  },
  computed: {
    filteredProjects() {
      if (this.mode === "All") {
        return this.projects;
      } else {
        return this.projects.filter((project) => project.category.includes(this.mode));
      }
    },
  },
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('start-animation');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.animatable').forEach(el => {
        observer.observe(el);
      });
    },
    resetAnimations() {
      const animatables = document.querySelectorAll('.animatable');
      animatables.forEach(el => {
        el.classList.remove('start-animation');
      });
      this.$nextTick(() => {
        this.createObserver();
      });
    },
  },
  watch: {
    mode(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.resetAnimations();
      }
    },
  },
}
</script>

<style scoped>
.projects {
  @apply w-full p-32 bg-slate-900;
}

.projects-container {
  @apply flex flex-col text-center items-center bg-slate-900;
}

.projects-title {
  @apply z-10 text-white text-5xl font-bold text-center;
}

.transition-block {
  @apply -rotate-3 p-32 w-full ml-8 scale-150 bg-white;
}
</style>