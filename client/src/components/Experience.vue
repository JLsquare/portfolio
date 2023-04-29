<template>
    <div class="flex justify-between m-16 mt-48">
        <div class="flex flex-col m-8 mr-16">
            <span class="text-cyan-400 text-xl text-left ml-4">
                {{ category.join(" • ") }}
            </span>
            <span class="text-white text-3xl mt-4 text-left ml-4">
                {{ title }}
            </span>
            <div class="bg-slate-900 shadow-[0_0_64px_rgb(0,0,0,0.4)] rounded-3xl p-4 mt-4">
                <p class="z-10 text-slate-400 text-2xl text-left max-w-2xl">
                    {{ description }}
                </p>
            </div>
        </div>
        <img class="rounded-3xl shadow-[0_0_64px_rgb(0,0,0,0.4)] hover:shadow-[0_0_64px_rgb(0,0,0,0.6)] max-h-96 bg-white" :src="image">
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        image: String,
        category: Array,
    },

}
</script>