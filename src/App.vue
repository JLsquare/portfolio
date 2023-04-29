<template>
    <div class="scroll-smooth overflow-x-hidden">
        <Home v-if="Object.keys(infos).length > 0" :name="infos.name" :title="infos.title" :description="infos.description"/>
        <About :about="infos.about" :image="infos.image"/>
        <Projects :projects="projects" :projectButtons="projectButtons"/>
        <Skills :skills="skills"/>
        <Experiences :experiences="experiences"/>
        <Contacts :contacts="contacts"/>
    </div>
</template>

<script>
import Contact from "@/components/Contact.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";
import Experiences from "@/components/Experiences.vue";
import Contacts from "@/components/Contacts.vue";

export default {
    name: "App",
    components: {
        Contacts,
        Experiences,
        Skills,
        Projects,
        About,
        Home,
        Contact
    },
    data() {
        return {
            infos: {},
            projects: [],
            skills: [],
            experiences: [],
            projectButtons: [],
            contacts: [],
        };
    },
    methods: {
        fetchConfig() {
            fetch("http://localhost:3000/config.json")
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.infos = data.infos;
                    this.projects = data.projects;
                    this.projectButtons = data.projectButtons;
                    this.skills = data.skills;
                    this.experiences = data.experiences;
                    this.contacts = data.contacts;
                });
        }
    },
    mounted() {
        this.fetchConfig();
    }
}
</script>