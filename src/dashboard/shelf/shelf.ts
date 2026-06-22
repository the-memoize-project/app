import { define } from '@directive'
import { paint, willPaint } from '@dom'
import on, { dataset } from '@event'
import component from './component'
import Decks from './decks'
import { hydrate, navigate, state } from './interfaces'
import Navigate from './navigate'
import State from './state'
import style from './style'

@define('m-dashboard-shelf')
@paint(component, style)
class Shelf extends HTMLElement {
  [state]

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @on.click('deck', dataset)
  [navigate]({ id }) {
    Navigate.goToDeck(id)
    return this
  }

  @willPaint
  async [hydrate]() {
    const decks = await Decks.get()
    decks.match({
      ok: (data) => (this[state] = State.create(data)),
      error: () => Navigate.goToError(),
    })
    return this
  }
}

export default Shelf
