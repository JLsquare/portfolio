<template>
    <a :href="link" class="p-4 m-4 bg-white rounded-2xl shadow-[0_0_64px_rgb(0,0,0,0.2)] hover:shadow-[0_0_64px_rgb(0,0,0,0.3)]">
        <img class="h-24 w-24 max-w-xl bg-transparent" :src="image" :alt="name">
    </a>
</template>

<script>
export default {
    props: {
        name: String,
        link: String,
        image: String
    }
}
</script>