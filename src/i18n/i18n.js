import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const DEFAULT_LOCALE = 'en-US'

const messages = {
  'en': {
    'common': {
      'save': 'Save',
      'cancel': 'Cancel',
      'continue': 'Continue'
    }
  },
  'es': {
    'common': {
      'save': 'Guardar',
      'cancel': 'Cancelar',
      'continue': 'Continuar'
    }
  }
}

export const i18n = new VueI18n({
  locale: DEFAULT_LOCALE,
  fallbackLocale: 'en',
  silentTranslationWarn: true,
  messages: messages
})
