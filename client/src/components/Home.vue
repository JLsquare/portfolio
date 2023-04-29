<template>
    <div id="home" style="background: radial-gradient(circle at center bottom, #0f172a, #000000); position: relative">
        <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                url="http://localhost:3000/particles.json"
        />
        <nav class="fixed top-0 right-0 left-0 z-50 flex items-center justify-end px-8 py-4 bg-transparent drop-shadow-[0_0_32px_rgb(0,0,0,0.5)]">
            <ul class="flex items-center">
                <li class="ml-12">
                    <a @click="scrollTo('home')" class="text-white text-xl hover:text-cyan-400 font-bold">Home</a>
                </li>
                <li class="ml-12">
                    <a @click="scrollTo('about')" class="text-white text-xl hover:text-cyan-400 font-bold">About</a>
                </li>
                <li class="ml-12">
                    <a @click="scrollTo('projects')" class="text-white text-xl hover:text-cyan-400 font-bold">Projects</a>
                </li>
                <li class="ml-12">
                    <a @click="scrollTo('skills')" class="text-white text-xl hover:text-cyan-400 font-bold">Skills</a>
                </li>
                <li class="ml-12">
                    <a @click="scrollTo('experience')" class="text-white text-xl hover:text-cyan-400 font-bold">Experience</a>
                </li>
                <li class="ml-12">
                    <button @click="scrollTo('contact')" class="z-10 bg-transparent p-2 text-xl hover:bg-cyan-400 hover:bg-opacity-10 text-cyan-400 hover:text-white py-2 px-6 border-4 border-cyan-400 rounded-full max-w-fit">
                        Contact >
                    </button>
                </li>
            </ul>
        </nav>
        <div class="flex flex-col justify-center h-screen ml-96">
            <span class="text-cyan-400 mb-6 text-xl text-left">Hi, my name is</span>
            <span class="z-10 text-white text-7xl font-bold text-left mb-8 max-w-fit">
                {{ name }}
            </span>
            <span class="text-slate-400 font-bold text-7xl text-left">
                {{ title }}
            </span>
            <p class="z-10 text-slate-400 text-2xl max-w-2xl text-left mt-8">
                {{ description.firstPart }}
                <a class="text-cyan-400" :href="description.link" target="_blank">
                    {{ description.linkText }}
                </a>
                {{ description.secondPart }}
            </p>
            <button @click="scrollTo('about')" class="bg-transparent mt-12 p-2 text-xl hover:bg-cyan-400 hover:bg-opacity-10 text-cyan-400 hover:text-white py-4 px-10 border-4 border-cyan-400 rounded-full max-w-fit">
                Get Started ⌵
            </button>
        </div>
    </div>
</template>

<script>
import {loadSlim} from "tsparticles-slim";

export default {
    methods: {
        particlesInit: async engine => {
            await loadSlim(engine);
        },
        particlesLoaded: async container => {
            console.log("Particles container loaded", container);
            container.options.fullScreen = {enable: false, zIndex: 0};
            container.options.interactivity = {
                detectsOn: "window",
                events: {
                    resize: true,
                },
            };
            container.refresh();
            console.log("particles.js config loaded", container);
        },
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