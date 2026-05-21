import { define } from '@directive'
import { paint } from '@dom'
import component from './component'
import style from './style'

@define('m-dashboard-stats')
@paint(component, style)
class Stats extends HTMLElement {
  #data

  get cards() {
    return this.#data?.cards ?? 999
  }

  get reviews() {
    return this.#data?.reviews ?? 87
  }

  get time() {
    return this.#data?.time ?? '1d 18h 6m'
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
}

export default Stats
