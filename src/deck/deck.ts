import { define } from '@directive'
import { paint, willPaint } from '@dom'
import renderer from '@renderer'
import router, { params } from '@router'
import component from './component'
import DeckData from './deck'
import { hydrate } from './interfaces'
import Navigate from './navigate'
import style from './style'

@define('m-deck')
@paint(component, style)
class Deck extends HTMLElement {
  #data

  get cover() {
    return this.#data?.cover
  }

  get id() {
    return this.#data?.id
  }

  get description() {
    return this.#data?.description
  }

  get name() {
    return this.#data?.name
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @willPaint
  async [hydrate]() {
    const id = Number(params.id)
    const result = await DeckData.get(id)
    result.match({
      ok: (data) => {
        this.#data = data
      },
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

export default Deck
