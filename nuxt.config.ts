// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-particles'],
  particles: {
    mode: 'slim',
    lazy: false
  },
}
