<template>
    <div id="projects" class="w-full p-32 bg-slate-900"></div>
    <div class="flex flex-col text-center items-center bg-slate-900">
        <span class="z-10 text-white text-5xl font-bold text-center">Some of my projects</span>
        <div class="flex justify-between max-w-fit">
            <ProjectCategoryButton
                    v-for="(category, index) in projectButtons"
                    :key="index"
                    :label="category.label"
                    :mode="mode"
                    @click="mode = category.mode"
            ></ProjectCategoryButton>
        </div>
        <div id="projects-list" class="z-10 w-3/4">
            <Project
                    v-for="(project, index) in filteredProjects"
                    :key="index"
                    :title="project.title"
                    :description="project.description"
                    :align="index % 2 === 0 ? 'left' : 'right'"
                    :category="project.category"
                    :tools="project.tools"
                    :image="project.image"
            ></Project>
        </div>
        <div class="w-full p-32"></div>
    </div>
    <div class="-rotate-3 p-32 w-full ml-8 scale-150 bg-white"></div>
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
}
</script>