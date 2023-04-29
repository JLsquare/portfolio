<template>
    <div class="project school flex justify-between m-16 mt-48" :class="{ 'web': align === 'left' }">
        <template v-if="align === 'right'">
            <img class="rounded-3xl shadow-[0_0_64px_rgb(0,0,0,0.4)] hover:shadow-[0_0_64px_rgb(0,0,0,0.6)] max-h-96" :src="image"/>
        </template>
        <div class="flex flex-col m-8 mt-4" :class="{ 'mr-16': align === 'left', 'ml-16': align === 'right' }">
            <span class="text-cyan-400 text-xl" :class="{ 'text-left ml-4': align === 'left', 'text-right mr-4': align === 'right' }">
                {{ category.join(" • ") }}
            </span>
            <span class="text-white text-3xl mt-4" :class="{ 'text-left ml-4': align === 'left', 'text-right mr-4': align === 'right' }">
                {{ title }}
            </span>
            <div class="bg-slate-900 shadow-[0_0_64px_rgb(0,0,0,0.4)] rounded-3xl p-4 mt-4">
                <p class="z-10 text-slate-400 text-2xl" :class="{ 'text-left': align === 'left', 'text-right': align === 'right' }" :style="{ maxWidth: '2xl' }">
                    {{ description }}
                </p>
            </div>
            <span class="text-cyan-400 text-2xl mt-4" :class="{ 'text-left ml-4': align === 'left', 'text-right mr-4': align === 'right' }">{{ tools.join(" • ") }}</span>
        </div>
        <template v-if="align === 'left'">
            <img class="rounded-3xl shadow-[0_0_64px_rgb(0,0,0,0.4)] hover:shadow-[0_0_64px_rgb(0,0,0,0.6)] max-h-96" :src="image"/>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        image: String,
        category: Array,
        tools: Array,
        align: {
            type: String,
            default: "left",
            validator: (value) => ["left", "right"].includes(value),
        },
    },
};
</script>