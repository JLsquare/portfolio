<template>
    <div id="about" class="bg-white flex flex-col text-center items-center z-10 relative">
        <div class="p-32">
            <div class="m-8"></div>
            <span class="z-10 text-cyan-900 text-5xl font-bold text-center">Who am I?</span>
            <div class="flex justify-between items-center max-w-6xl mt-32">
                <p class="z-10 text-custom-cyan-200 text-2xl text-left mr-64">
                    {{ about }}
                </p>
                <img :src="image" alt="picture" class="ml-8 rounded-full shadow-[0_0_32px_rgb(0,0,0,0.2)] max-h-96">
            </div>
            <button @click="scrollToProjects" class="float-left ml-32 bg-transparent mt-12 p-2 text-xl hover:bg-cyan-400 hover:bg-opacity-10 text-cyan-400 hover:text-white py-4 px-10 border-4 border-cyan-400 rounded-full max-w-fit">
                My Projects ⌵
            </button>
        </div>
    </div>
    <div class="-rotate-3 p-32 w-full ml-8 scale-150 bg-white -mt-44 shadow-2xl"></div>
</template>

<script>
export default {
    methods: {
        scrollToProjects() {
            document.getElementById("projects").scrollIntoView({behavior: "smooth"});
        }
    },
    props: {
        about: String,
        image: String
    }
}
</script>