import Result from '@result'
import DB from '@storage'

class Deck {
  static async create(data) {
    const db = await DB.open()
    const { data: deck, error } = await db.deck.add(data)
    return error ? Result.error(error) : Result.ok(deck)
  }
}

export default Deck
