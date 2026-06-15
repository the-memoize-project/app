import Result from '@result'
import DB from '@storage'

class Deck {
  static async update(id, data) {
    const db = await DB.open()
    const { error } = await db.deck.update(id, data)
    return error ? Result.error(error) : Result.ok(id)
  }
}

export default Deck
