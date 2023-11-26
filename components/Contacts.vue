<template>
  <div id="contact" class="contact-container">
    <div class="m-24"></div>
    <span class="contact-title">How to contact me?</span>
    <div class="flex m-16 mt-32">
      <Contact
          v-for="(contact, index) in contacts"
          :key="index"
          :name="contact.name"
          :image="contact.image"
          :link="contact.link"
      ></Contact>
    </div>
    <div class="w-full p-32"></div>
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  name: "Contacts",
  components: {Contact},
  props: {
    contacts: Array,
  },
}
</script>

<style scoped>
.contact-container {
  @apply bg-white flex flex-col text-center items-center relative -mt-32;
}

.contact-title {
  @apply z-10 text-cyan-900 text-5xl font-bold text-center;
}
</style>
