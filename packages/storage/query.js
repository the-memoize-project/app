import Filter from './filter.js'
import Limit from './limit.js'
import Order from './order.js'

class Query {
  #filter = new Filter()
  #limit = new Limit()
  #order = new Order()
  #store

  constructor(store) {
    this.#store = store
  }

  async delete() {
    const collected = await this.#store.get()
    const filtered = this.#filter.reduce(collected)
    await Promise.all(filtered.map((record) => this.#store.delete(record.id)))
  }

  async get() {
    const collected = await this.#store.get()
    const filtered = this.#filter.reduce(collected)
    const ordered = this.#order.reduce(filtered)
    const limited = this.#limit.reduce(ordered)
    return limited
  }

  limit(count) {
    this.#limit.to(count)
    return this
  }

  orderBy(field, direction = 'asc') {
    this.#order.by(field, direction)
    return this
  }

  async update(data) {
    const collected = await this.#store.get()
    const filtered = this.#filter.reduce(collected)
    await Promise.all(
      filtered.map((record) => this.#store.update(record.id, data)),
    )
  }

  where(fields) {
    this.#filter.add(fields)
    return this
  }
}

export default Query
