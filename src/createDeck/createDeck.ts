import { define } from '@directive'
import { paint } from '@dom'
import renderer from '@renderer'
import router from '@router'
import component from './component'
import style from './style'

@define('m-create-deck')
@paint(component, style)
class CreateDeck extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static {
    router('/deck/create', function createDeck() {
      renderer('<m-create-deck></m-create-deck>')
    })
  }
}

export default CreateDeck
