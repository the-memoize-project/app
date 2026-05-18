import { attributeChanged, booleanAttribute, define } from '@directive'
import { paint, willPaint } from '@dom'
import Echo, { dispatchEvent } from '@echo'
import on, { stop } from '@event'
import component from './component.js'
import { visibility } from './interfaces'
import style from './style.js'

@define('m-modal')
@paint(component, style)
class Modal extends Echo(HTMLElement) {
  #internals
  #opened

  get opened() {
    return (this.#opened ??= false)
  }

  @attributeChanged('opened', booleanAttribute)
  set opened(value) {
    this.#opened = value
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.#internals = this.attachInternals()
  }

  @on.click('overlayer', stop)
  @dispatchEvent('close')
  close() {
    this.opened = false
    return this
  }

  open() {
    this.opened = true
    return this
  }

  @willPaint
  [visibility]() {
    this.opened
      ? this.#internals.states.add('opened')
      : this.#internals.states.delete('opened')
    return this
  }
}

export default Modal
