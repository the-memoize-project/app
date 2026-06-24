import { define } from '@directive'
import { paint } from '@dom'
import renderer from '@renderer'
import router from '@router'
import component from './component'
import style from './style'

@define('m-deck-edit')
@paint(component, style)
class Edit extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static {
    router('/deck/:id/edit', function editDeck() {
      renderer('<m-deck-edit></m-deck-edit>')
    })
  }
}

export default Edit
