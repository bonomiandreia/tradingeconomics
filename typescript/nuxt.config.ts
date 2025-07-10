// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  devtools: { enabled: true },
  runtimeConfig: {
    apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
    apiKey: process.env.NUXT_API_KEY
  },
  routeRules: {
    '/': { redirect: { to: '/compares/mexico,sweden' } }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/i18n', 'nuxt-aos'],
  css: ['@/assets/scss/tailwind.scss'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'english', file: 'en.json' },
      { code: 'pt', name: 'Portugues', file: 'pt.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      redirectOn: 'root',
    },
  },
})