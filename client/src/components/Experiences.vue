<template>
    <div id="experience" class="flex flex-col text-center items-center bg-slate-900">
        <div class="w-full p-32"></div>
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
        <div class="w-full p-32"></div>
    </div>
    <div class="-rotate-3 p-32 w-full ml-8 scale-150 bg-white"></div>
</template>

<script>
import Experience from "@/components/Experience.vue";

export default {
    name: "Experiences",
    components: {Experience},
    props: {
        experiences: Array,
    },
}
</script>