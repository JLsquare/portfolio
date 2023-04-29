<template>
    <div class="flex flex-col items-center p-4 w-32">
        <img :src="image">
        <span class="text-custom-cyan-200 text-2xl text-center">
            {{ name }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        image: String,
    }
}
</script>