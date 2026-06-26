import { define } from '@directive'
import { paint } from '@dom'
import renderer from '@renderer'
import router from '@router'
import component from './component'

@define('m-deck')
@paint(component)
class View extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static {
    router('/deck/:id/view', function deck() {
      renderer('<m-deck></m-deck>')
    })
  }
}

export default View
