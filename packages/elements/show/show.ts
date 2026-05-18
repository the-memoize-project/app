import { attributeChanged, booleanAttribute, define } from '@directive'
import { paint, repaint } from '@dom'
import Echo from '@echo'
import component from './component.js'
import style from './style.js'

@define('m-show')
@paint(component, style)
class Show extends Echo(HTMLElement) {
  #align
  #justify
  #when

  get align() {
    return (this.#align ??= 'start')
  }

  @attributeChanged('align')
  @repaint
  set align(value) {
    this.#align = value
  }

  get display() {
    return this.when ? 'flex' : 'none'
  }

  get justify() {
    return (this.#justify ??= 'flex-start')
  }

  @attributeChanged('justify')
  @repaint
  set justify(value) {
    this.#justify = value
  }

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

export default Show
