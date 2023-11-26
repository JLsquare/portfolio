<template>
  <div id="skills" class="skills">
    <div class="m-24"></div>
    <span class="skills-title">What are my Skills?</span>
    <div class="skills-container">
      <div id="skills-menu" class="w-96 bg-transparent flex flex-col">
        <SkillCategoryButton v-for="(_, index) in skills"
                             :key="index"
                             :label="index.toString()"
                             :mode="skillsMode"
                             @click="skillsMode = index"
                             :class="{'skill-category-button': true, 'active': skillsMode === index}"
        />
      </div>
      <div id="skills-list" class="w-full p-6 rounded-2xl bg-white">
        <div id="software-development-list" class="w-full h-full grid grid-cols-6">
          <Skill v-for="(skill, index) in skills[skillsMode]"
                 :key="index"
                 :name="skill.name"
                 :image="skill.image"
          ></Skill>
        </div>
      </div>
    </div>
  </div>
  <div class="transition-block"></div>
</template>

<script>
import Skill from "@/components/Skill.vue";
import SkillCategoryButton from "@/components/SkillCategoryButton.vue";

export default {
  components: {Skill, SkillCategoryButton},
  props: {
    skills: Object
  },
  data() {
    return {
      skillsMode: "Software Development"
    }
  }
}
</script>

<style scoped>
.skills {
  @apply bg-white h-screen flex flex-col text-center items-center relative -mt-48 z-10;
}

.skills-title {
  @apply z-10 text-cyan-900 text-5xl font-bold text-center;
}

.skills-container {
  @apply mt-16 flex max-w-6xl filter drop-shadow-[0_0_32px_rgb(0,0,0,0.2)] bg-transparent;
}

.transition-block {
  @apply -rotate-3 p-32 w-full ml-8 scale-150 bg-white;
}
</style>