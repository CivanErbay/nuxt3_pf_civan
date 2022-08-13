import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [['@storyblok/nuxt', { accessToken: '0P9QYrZBBUKRMPyl96JsBgtt' }]],
  app: {
    head: {
      script: [{ src: 'https://cdn.tailwindcss.com' }],
    },
  },
})
