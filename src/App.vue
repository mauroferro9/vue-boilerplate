<template>
  <div id="app">
    <header>
      <button v-for="lang in locales" :key="lang.name" @click="changeLocale(lang.language)">
        {{ lang.name }}
      </button>
    </header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <footer>{{ getAppName | capitalize }} v{{ getAppVersion }}</footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SessionService from './services/session.service'
import { testPromise } from './services/test.service'
import { getLocales } from './services/locale.service'
import { changeLocale } from './mixins/locale.mixin'
import MobileDetect from 'mobile-detect'

const md = new MobileDetect(window.navigator.userAgent)

export default {
  data () {
    return {
      locales: null
    }
  },
  mixins: [
    changeLocale
  ],
  computed: {
    ...mapGetters('app', ['getAppName', 'getAppVersion'])
  },
  async created () {
    this.locales = getLocales()
    console.warn(SessionService.getItem('test') || 'No session items')
    this.test()
    console.warn(md.phone() ? 'Running mobile version' : 'Running desktop version')
  },
  methods: {
    test () {
      console.warn(testPromise())
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
