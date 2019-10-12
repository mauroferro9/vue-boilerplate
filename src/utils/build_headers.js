// import uuid from 'uuid'
// import get from 'lodash.get'

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

/**
 * Build all the headers for all services adds Sessions clientId and JWT
 * @param {Object} headers
 * @return {Object} headers with default values
 */
function build (headers = {}) {
  // const store = require('../store')
  // const jwt = localStorage.getItem(process.env.AUTH_COOKIE_NAME) || get(store, 'state.auth.jwt') || get(store, 'default.state.auth.jwt')
  // if (jwt) {
  //   DEFAULT_HEADERS['Authorization'] = jwt
  // }

  const header = {
    ...DEFAULT_HEADERS,
    // 'X-Client-ID': `explorer_revamped`,
    // 'X-Request-ID': uuid.v4(),
    ...headers
  }

  return header
}

export function buildHeaders (headers = {}) {
  return build(headers)
}

export default build
