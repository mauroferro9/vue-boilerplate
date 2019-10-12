import packageJson from '../../package.json'

function stateBuilder () {
  return {
    name: 'vueJs scaffold app',
    version: packageJson.version
  }
}

export default function factory () {
  return {
    namespaced: true,
    state: stateBuilder,
    getters: {
      getAppName (state) {
        return state.name
      },
      getAppVersion (state) {
        return state.version
      }
    },
    mutations: {
      setAppName (state, name) {
        state.name = name
      }
    },
    actions: {

    }
  }
}
