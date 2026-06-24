import { define } from '@directive'
import { paint } from '@dom'
import renderer from '@renderer'
import router from '@router'
import component from './component'
import style from './style'

@define('m-deck-create')
@paint(component, style)
class Create extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static {
    router('/deck/create', function createDeck() {
      renderer('<m-deck-create></m-deck-create>')
    })
  }
}

export default Create
