class State {
  #cover
  #description
  #id
  #name

  get cover() {
    return this.#cover
  }

  get description() {
    return this.#description
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  constructor(cover, description, id, name) {
    this.#cover = cover
    this.#description = description
    this.#id = id
    this.#name = name
  }

  static create({ cover, description, id, name } = {}) {
    return new State(cover, description, id, name)
  }
}

export default State
