<template>
    <div>
        <span :class="textClass">{{ title }}</span>
        <div class="bg-slate-900 shadow-[0_0_64px_rgb(0,0,0,0.4)] rounded-3xl p-4 mt-4">
            <p class="z-10 text-slate-400 text-2xl max-w-2xl" :class="textAlignClass">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectContent',
    props: {
        title: String,
        description: String,
        isLeft: Boolean,
    },
    computed: {
        textClass() {
            return [
                'text-white',
                'text-3xl',
                'mt-4',
                this.isLeft ? 'text-left' : 'text-right',
                this.isLeft ? 'ml-4' : 'mr-4',
            ];
        },
        textAlignClass() {
            return this.isLeft ? 'text-left' : 'text-right';
        },
    },
};
</script>