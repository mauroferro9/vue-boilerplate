import { i18n } from '@/i18n/i18n'

export const changeLocale = {
  methods: {
    changeLocale (locale) {
      i18n.locale = locale
    }
  }
}
