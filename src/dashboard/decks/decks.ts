import { define } from '@directive'
import { paint } from '@dom'
import component from './component'
import style from './style'

@define('m-dashboard-decks')
@paint(component, style)
class Decks extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
}

export default Decks
