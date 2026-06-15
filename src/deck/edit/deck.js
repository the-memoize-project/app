import Result from '@result'
import DB from '@storage'

class Deck {
  static async get(id) {
    const db = await DB.open()
    const { data, error } = await db.deck.get(id)
    return error ? Result.error(error) : Result.ok(data)
  }

  static async update(data) {
    const db = await DB.open()
    const id = Number(data.id)
    const { error } = await db.deck.update(id, { ...data, id })
    return error ? Result.error(error) : Result.ok({ ...data, id })
  }
}

export default Deck
