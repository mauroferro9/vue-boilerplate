const getItem = function (key) {
  const value = sessionStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (e) {
    return undefined
  }
}

const setItem = function (key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    throw new Error('Value could not be strigified')
  }
}

const removeItem = function (key) {
  sessionStorage.removeItem(key)
}

const removeItems = function (keys) {
  keys.forEach(key => {
    sessionStorage.removeItem(key)
  })
}

const clear = function () {
  sessionStorage.clear()
}

export default {
  getItem,
  setItem,
  removeItem,
  removeItems,
  clear
}
