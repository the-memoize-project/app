import { attributeChanged, define } from '@directive'
import Echo from '@echo'
import { Headless } from '@mixin'
import DB from '@storage'

@define('m-dataset')
class Dataset extends Headless(Echo(HTMLElement)) {
  #name
  #upsert

  get name() {
    return (this.#name ??= '')
  }

  @attributeChanged('name')
  set name(value) {
    this.#name = value
  }

  get upsert() {
    return (this.#upsert ??= 'id')
  }

  @attributeChanged('upsert')
  set upsert(value) {
    this.#upsert = value
  }

  async add(data) {
    const db = await DB.open()
    return db[this.name].add(data)
  }

  async delete(id) {
    const db = await DB.open()
    return db[this.name].delete(id)
  }

  async get(id) {
    const db = await DB.open()
    return db[this.name].get(id)
  }

  async put(data) {
    const db = await DB.open()
    return db[this.name].update(data[this.upsert], data)
  }
}

export default Dataset
