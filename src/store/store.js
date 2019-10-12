import Vue from 'vue'
import Vuex from 'vuex'
import appFactory from './app.store'

Vue.use(Vuex)

export function storeFactory () {
  return new Vuex.Store({
    modules: {
      app: appFactory()
    }
  })
}

const store = storeFactory()

export default store
