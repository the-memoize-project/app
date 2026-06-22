import { define } from '@directive'
import { paint } from '@dom'
import on, { detail } from '@event'
import renderer from '@renderer'
import router from '@router'
import component from './component'
import Deck from './deck'
import { persist } from './interfaces'
import Navigate from './navigate'
import style from './style'

@define('m-deck-create')
@paint(component, style)
class Create extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @on.submitted('m-form', detail)
  async [persist](data) {
    const deck = await Deck.create(data)
    deck.match({
      ok: ({ id }) => Navigate.goToDeck(id),
      error: () => Navigate.goToError(),
    })
    return this
  }

  static {
    router('/deck/create', function createDeck() {
      renderer('<m-deck-create></m-deck-create>')
    })
  }
}

export default Create
