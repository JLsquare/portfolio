<template>
    <div id="skills" class="bg-white h-screen flex flex-col text-center items-center relative -mt-48 z-10">
        <div class="m-24"></div>
        <span class="z-10 text-cyan-900 text-5xl font-bold text-center">What are my Skills?</span>
        <div class="mt-16 flex max-w-6xl filter drop-shadow-[0_0_32px_rgb(0,0,0,0.2)] bg-transparent">
            <div id="skills-menu" class="w-96 bg-transparent flex flex-col">
                <SkillCategoryButton v-for="(category, index) in skills"
                                     :key="index"
                                     :label="index"
                                     :transparent="skillsMode !== index"
                                     :mode="skillsMode"
                                     @click="skillsMode = index"
                ></SkillCategoryButton>
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
    <div class="-rotate-3 p-32 w-full ml-8 scale-150 bg-white -mt-44 shadow-2xl"></div>
</template>

<script>
import Skill from "@/components/Skill.vue";
import SkillCategoryButton from "@/components/SkillCategoryButton.vue";

export default {
    components: {Skill, SkillCategoryButton},
    props: {
        skills: Array
    },
    data() {
        return {
            skillsMode: "Software Development"
        }
    }
}

</script>