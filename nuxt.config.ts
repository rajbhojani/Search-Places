import VKeyboardShortcut from './directives/v-keyboard-shortcut'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
    }
  },
  plugins: [
    '~/plugins/directives.ts'
  ]
})
