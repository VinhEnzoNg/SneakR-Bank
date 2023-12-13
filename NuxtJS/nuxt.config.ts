// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337/',
    prefix: '/api',
    version: 'v4',
    cookie: {}, 
    cookieName: 'strapi_jwt'
  }
})