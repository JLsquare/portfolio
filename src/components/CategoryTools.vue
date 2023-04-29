<template>
    <div>
        <span :class="textClass">{{ category.join(' • ') }}</span>
        <span :class="textClass">{{ tools.join(' • ') }}</span>
    </div>
</template>

<script>
export default {
    name: 'CategoryTools',
    props: {
        category: Array,
        tools: Array,
        isLeft: Boolean,
    },
    computed: {
        textClass() {
            return [
                'text-cyan-400',
                'text-2xl',
                'mt-4',
                this.isLeft ? 'text-left' : 'text-right',
                this.isLeft ? 'ml-4' : 'mr-4',
            ];
        },
    },
};
</script>