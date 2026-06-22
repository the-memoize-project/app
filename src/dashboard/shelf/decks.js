import Result from '@result'
import DB from '@storage'

class Decks {
  static async get() {
    const db = await DB.open()
    const { data, error } = await db.deck.get()
    return error ? Result.error(error) : Result.ok(data)
  }
}

export default Decks
