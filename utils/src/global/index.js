class Global {
  userInfo = this.getLocalStore('userInfo') || null

  get(name) {
    return this[name]
  }

  set(name, value) {
    this[name] = value
  }

  setLocalStore(name, value) {
    this.set(name, value)
    return localStorage.setItem(name, JSON.stringify(value))
  }

  getLocalStore(name) {
    const object = localStorage.getItem(name)
    return JSON.parse(object)
  }
}

export default new Global()
