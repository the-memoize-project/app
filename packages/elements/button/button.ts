import { attributeChanged, define } from '@directive'
import { paint, repaint } from '@dom'
import Echo, { dispatchEvent } from '@echo'
import on, { stop } from '@event'
import component from './component.js'
import { setState } from './interfaces.js'
import style from './style.js'

@define('m-button')
@paint(component, style)
class Button extends Echo(HTMLElement) {
  #color
  #internals
  #type
  #value
  #variant
  #width

  get color() {
    return (this.#color ??= 'primary')
  }

  @attributeChanged('color')
  @repaint
  set color(value) {
    this.#color = value
  }

  get type() {
    return (this.#type ??= 'submit')
  }

  @attributeChanged('type')
  @repaint
  set type(value) {
    this.#type = value
  }

  get value() {
    return this.#value
  }

  @attributeChanged('value')
  @repaint
  set value(value) {
    this.#value = value
  }

  get variant() {
    return (this.#variant ??= 'solid')
  }

  @attributeChanged('variant')
  @repaint
  set variant(value) {
    this.#variant = value
    this[setState](value)
  }

  get width() {
    return (this.#width ??= 'auto')
  }

  @attributeChanged('width')
  @repaint
  set width(value) {
    this.#width = value
  }

  static get formAssociated() {
    return true
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.#internals = this.attachInternals()
  }

  @on.click('*', stop)
  @dispatchEvent('click')
  click() {
    switch (this.type) {
      case 'submit':
        this.#internals.form?.requestSubmit()
        break
      case 'reset':
        this.#internals.form?.reset()
        break
    }
    return this.value
  }

  [setState](variant) {
    this.#internals.states.delete(variant)
    this.#internals.states.add(variant)
    return this
  }
}

export default Button
