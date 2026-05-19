import cookie from '@cookie'

class User {
  #data = {}

  get avatar() {
    return this.#data?.avatar_url
  }

  get goal() {
    return (
      this.#data?.goal ??
      'Quero gravar OOP em JS puro e Web Components, dominar patterns e perf, liderar times e entregar UIs modulares e ultra-rápidas. ⚡'
    )
  }

  get name() {
    return this.#data?.name
  }

  constructor(data) {
    this.#data = data
  }

  static logged() {
    return new User({
      avatar_url: cookie.avatar_url,
      name: cookie.name,
    })
  }
}

export default User
