import Result from '@result'
import DB from '@storage'

class Deck {
  static async get(id) {
    const db = await DB.open()
    const { data, error } = await db.deck.get(id)
    return error ? Result.error(error) : Result.ok(data)
  }
}

export default Deck
