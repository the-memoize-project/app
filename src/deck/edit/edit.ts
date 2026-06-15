import { define } from '@directive'
import { paint } from '@dom'
import on, { detail } from '@event'
import renderer from '@renderer'
import router from '@router'
import component from './component'
import style from './style'

@define('m-deck-update')
@paint(component, style)
class Update extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @on.submitted('m-form', detail)
  async persist(_data) {
    return this
  }

  static {
    router('/deck/:id/edit', function updateDeck() {
      renderer('<m-deck-update></m-deck-update>')
    })
  }
}

export default Update
