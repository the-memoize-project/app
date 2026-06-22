import { define } from '@directive'
import { paint, willPaint } from '@dom'
import on, { detail } from '@event'
import renderer from '@renderer'
import router, { params } from '@router'
import component from './component'
import Deck from './deck'
import { hydrate, persist, state } from './interfaces'
import Navigate from './navigate'
import State from './state'
import style from './style'

@define('m-deck-edit')
@paint(component, style)
class Edit extends HTMLElement {
  [state]

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @willPaint
  async [hydrate]() {
    const id = Number(params.id)
    const deck = await Deck.get(id)
    deck.match({
      ok: (data) => (this[state] = State.create(data)),
      error: () => Navigate.goToError(),
    })
    return this
  }

  @on.submitted('m-form', detail)
  async [persist](data) {
    const id = Number(data.id)
    const deck = await Deck.update({ ...data, id })
    deck.match({
      ok: ({ id }) => Navigate.goToDeck(id),
      error: () => Navigate.goToError(),
    })
    return this
  }

  static {
    router('/deck/:id/edit', function editDeck() {
      renderer('<m-deck-edit></m-deck-edit>')
    })
  }
}

export default Edit
