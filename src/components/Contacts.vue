<template>
    <div id="contact" class="bg-white flex flex-col text-center items-center relative -mt-32">
        <div class="m-24"></div>
        <span class="z-10 text-cyan-900 text-5xl font-bold text-center">How to contact me?</span>
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