<template>
    <div class="p-8 cursor-pointer rounded-l-2xl -mr-8" :class="bgClass">
        <span class="text-cyan-400 text-xl font-bold text-center w-full whitespace-nowrap">
            {{ label }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        transparent: Boolean,
    },
    computed: {
        bgClass() {
            return this.transparent ? 'bg-transparent' : 'bg-white';
        },
    }
}
</script>