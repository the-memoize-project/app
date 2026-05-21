import { define } from '@directive'
import { paint, willPaint } from '@dom'
import component from './component'
import { hydrate } from './interfaces'
import style from './style'
import Summary from './summary'

@define('m-dashboard-stats')
@paint(component, style)
class Stats extends HTMLElement {
  #summary

  get cards() {
    return this.#summary.cards
  }

  get reviews() {
    return this.#summary.reviews
  }

  get time() {
    return this.#summary.time
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @willPaint
  async [hydrate]() {
    this.#summary = await Summary.ofUserLogged()
    return this
  }
}

export default Stats
