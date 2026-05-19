class Progress {
  #data

  get total() {
    return (this.#data.total ??= 9999)
  }

  constructor(data) {
    this.#data = data
  }

  static async ofUserLogged() {
    return new Progress({})
  }
}

export default Progress
