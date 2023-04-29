<template>
    <div class="scroll-smooth overflow-x-hidden">
        <div style="background: radial-gradient(circle at center bottom, #0f172a, #000000); position: relative" class="-z-10">
            <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                url="http://localhost:3000/particles.json"
            />
            <nav class="fixed top-0 right-0 left-0 z-50 flex items-center justify-end px-8 py-4 bg-transparent drop-shadow-[0_0_32px_rgb(0,0,0,0.5)]">
                <ul class="flex items-center">
                    <li class="ml-12">
                        <a href="#" class="text-white text-xl hover:text-cyan-400 font-bold">Home</a>
                    </li>
                    <li class="ml-12">
                        <a href="#about" class="text-white text-xl hover:text-cyan-400 font-bold">About</a>
                    </li>
                    <li class="ml-12">
                        <a href="#projects" class="text-white text-xl hover:text-cyan-400 font-bold">Projects</a>
                    </li>
                    <li class="ml-12">
                        <a href="#skills" class="text-white text-xl hover:text-cyan-400 font-bold">Skills</a>
                    </li>
                    <li class="ml-12">
                        <a href="#experience" class="text-white text-xl hover:text-cyan-400 font-bold">Experience</a>
                    </li>
                    <li class="ml-12">
                        <form action="#contact">
                            <button class="z-10 bg-transparent p-2 text-xl hover:bg-cyan-400 hover:bg-opacity-10 text-cyan-400 hover:text-white py-2 px-6 border-4 border-cyan-400 rounded-full max-w-fit">
                                Contact >
                            </button>
                        </form>
                    </li>
                </ul>
            </nav>
            <div class="flex flex-col justify-center h-screen ml-96">
                <span class="text-cyan-400 mb-6 text-xl text-left">Hi, my name is</span>
                <span class="z-10 text-white text-7xl font-bold text-left mb-8 max-w-fit">Jean-Loup Mellion.</span>
                <span class="text-slate-400 font-bold text-7xl text-left">I’m an IT Student.</span>
                <p class="z-10 text-slate-400 text-2xl max-w-2xl text-left mt-8">
                    I'm an 18-year-old French student at the University Institute of Technology
                    <a class="text-cyan-400" href="https://www.iutvannes.fr/" target="_blank">IUT Vannes</a>
                    and I study computer science. I'm open to any opportunity.
                </p>
                <form action="#about" class="z-10 max-w-fit">
                    <button class="bg-transparent mt-12 p-2 text-xl hover:bg-cyan-400 hover:bg-opacity-10 text-cyan-400 hover:text-white py-4 px-10 border-4 border-cyan-400 rounded-full max-w-fit">
                        Get Started ⌵
                    </button>
                </form>
            </div>
        </div>
        <div id="about" class="bg-white flex flex-col text-center items-center z-20">
            <div class="p-32">
                <div class="m-24"></div>
                <span class="z-10 text-cyan-900 text-5xl font-bold text-center">Who am I?</span>
                <div class="flex justify-between items-center max-w-6xl mt-32">
                    <p class="z-10 text-custom-cyan-200 text-2xl text-left mr-64">
                        I am a computer science student at IUT Vannes, passionate about various fields in computer science, including game development, web development, simulations, and cybersecurity. I have acquired a strong knowledge base through my education and self-taught experiments. Currently, I am looking for an apprenticeship to further enhance my skills and contribute to a dynamic company.                </p>
                    <img src="assets/picture.png" alt="picture" class="ml-8 rounded-full shadow-[0_0_32px_rgb(0,0,0,0.2)] max-h-96">
                </div>
                <form action="#projects" class="z-10 float-left ml-32">
                    <button class="bg-transparent mt-12 p-2 text-xl hover:bg-cyan-400 hover:bg-opacity-10 text-cyan-400 hover:text-white py-4 px-10 border-4 border-cyan-400 rounded-full max-w-fit">
                        My Projects ⌵
                    </button>
                </form>
            </div>
        </div>
        <div id="projects" class="-rotate-3 p-32 w-full ml-8 scale-150 bg-slate-900"></div>
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
        </div>
        <div class="-rotate-3 p-32 w-full ml-8 scale-150 bg-slate-900"></div>
        <div id="skills" class="bg-white h-screen flex flex-col text-center items-center">
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
        <div id="experience" class="-rotate-3 p-32 w-full ml-8 scale-150 bg-slate-900"></div>
        <div class="flex flex-col text-center items-center bg-slate-900">
            <span class="z-10 text-white text-5xl font-bold text-center">My little experience</span>
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
        </div>
        <div class="-rotate-3 p-32 w-full ml-8 scale-150 bg-slate-900"></div>
        <div id="contact" class="bg-white h-screen flex flex-col text-center items-center">
            <div class="m-24"></div>
            <span class="z-10 text-cyan-900 text-5xl font-bold text-center">How to contact me?</span>
            <div class="flex m-16 mt-32">
                <Contact
                    v-for="(contact, index) in contacts"
                    :key="index"
                    :name="contact.name"
                    :image="contact.image"
                    :link="contact.link"
                ></Contact>
            </div>
        </div>
    </div>
</template>

<script>
import {loadSlim} from "tsparticles-slim";
import Project from "./components/Project.vue";
import ProjectCategoryButton from "./components/ProjectCategoryButton.vue";
import Skill from "./components/Skill.vue";
import SkillCategoryButton from "./components/SkillCategoryButton.vue";
import Experience from "@/components/Experience.vue";
import Contact from "@/components/Contact.vue";

export default {
    name: "App",
    components: {Contact, Experience, SkillCategoryButton, Skill, ProjectCategoryButton, Project},
    data() {
        return {
            projects: [],
            skills: [],
            experiences: [],
            projectButtons: [],
            mode: 'All',
            skillsMode: 'Software Development',
        };
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
    methods: {
        particlesInit: async engine => {
            await loadSlim(engine);
        },
        particlesLoaded: async container => {
            console.log("Particles container loaded", container);
            container.options.fullScreen = {enable: false, zIndex: -1};
            container.refresh();
            console.log("particles.js config loaded", container);
        },
        fetchDatas() {
            fetch("http://localhost:3000/portfolio-data.json")
                .then(response => response.json())
                .then(data => {
                    this.projects = data.projects;
                    this.projectButtons = data.projectButtons;
                    this.skills = data.skills;
                    this.experiences = data.experiences;
                    this.contacts = data.contacts;
                    this.constructProjects();
                });
        },
        constructProjects() {
            let projectList = document.getElementById("projects-list");
            this.projects.forEach((project, index) => {
                let projectComponent = document.createElement("Project");
                projectComponent.setAttribute("title", project.title);
                projectComponent.setAttribute("description", project.description);
                projectComponent.setAttribute("align", index % 2 === 0 ? "left" : "right");
                projectComponent.setAttribute("category", project.category);
                projectComponent.setAttribute("tools", project.tools);
                projectComponent.setAttribute("image", project.image);
                projectList.appendChild(projectComponent);
            });
        }
    },
    mounted() {
        this.fetchDatas();
    }
}
</script>