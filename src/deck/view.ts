import { define } from '@directive'
import { paint, willPaint } from '@dom'
import renderer from '@renderer'
import router, { params } from '@router'
import component from './component'
import Deck from './deck'
import { hydrate, state } from './interfaces'
import Navigate from './navigate'
import State from './state'
import style from './style'

@define('m-deck')
@paint(component, style)
class View extends HTMLElement {
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

  static {
    router('/deck/:id/view', function deck() {
      renderer('<m-deck></m-deck>')
    })
  }
}

export default View
