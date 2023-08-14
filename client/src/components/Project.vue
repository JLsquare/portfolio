<template>
  <div class="project school flex justify-between m-16 mt-48" :class="{ 'web': align === 'left' }">
    <template v-if="align === 'right'">
      <template v-if="isImage">
        <img class="rounded-3xl shadow-media hover:shadow-media-active max-h-96" :src="image"/>
      </template>
      <template v-else>
        <video class="rounded-3xl shadow-media hover:shadow-media-active max-h-96" autoplay loop :src="image" muted></video>
      </template>
    </template>
    <div class="flex flex-col m-8 mt-4" :class="{ 'mr-16': align === 'left', 'ml-16': align === 'right' }">
            <span class="text-cyan-400 text-xl" :class="{ 'text-left ml-4': align === 'left', 'text-right mr-4': align === 'right' }">
                {{ category.join(" • ") }}
            </span>
      <span class="text-white text-3xl mt-4" :class="{ 'text-left ml-4': align === 'left', 'text-right mr-4': align === 'right' }">
                {{ title }}
            </span>
      <div class="bg-slate-900 shadow-[0_0_64px_rgb(0,0,0,0.4)] rounded-3xl p-4 mt-4">
        <p class="z-10 text-slate-400 text-xl" :class="{ 'text-left': align === 'left', 'text-right': align === 'right' }" :style="{ maxWidth: '2xl' }">
          {{ description }}
        </p>
      </div>
      <span class="text-cyan-400 text-xl mt-4" :class="{ 'text-left ml-4': align === 'left', 'text-right mr-4': align === 'right' }">{{ tools.join(" • ") }}</span>
    </div>
    <template v-if="align === 'left'">
      <template v-if="isImage">
        <img class="rounded-3xl shadow-media hover:shadow-media-active max-h-96" :src="image"/>
      </template>
      <template v-else>
        <video class="rounded-3xl shadow-media hover:shadow-media-active max-h-96" autoplay loop :src="image" muted></video>
      </template>
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
  computed: {
    isImage() {
      return /\.(jpg|jpeg|png|gif)$/i.test(this.image);
    },
  },
};
</script>

<style scoped>
.shadow-media {
  box-shadow: 0 0 64px rgba(0,0,0,0.4);
}
.shadow-media-active {
  box-shadow: 0 0 64px rgba(0,0,0,0.6);
}
</style>
