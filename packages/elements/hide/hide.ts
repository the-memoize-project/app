import { attributeChanged, booleanAttribute, define } from '@directive'
import { paint, repaint } from '@dom'
import Echo from '@echo'
import component from './component.js'
import style from './style.js'

@define('m-hide')
@paint(component, style)
class Hide extends Echo(HTMLElement) {
  #when

  get when() {
    return (this.#when ??= false)
  }

  @attributeChanged('when', booleanAttribute)
  @repaint
  set when(value) {
    this.#when = value
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
}

export default Hide
