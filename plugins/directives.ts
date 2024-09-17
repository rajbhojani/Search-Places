import { defineNuxtPlugin } from '#app'
import VKeyboardShortcut from '~/directives/v-keyboard-shortcut'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('keyboard-shortcut', VKeyboardShortcut)
})