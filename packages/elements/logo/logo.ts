import { attributeChanged, booleanAttribute, define } from '@directive'
import { paint } from '@dom'
import Echo from '@echo'
import component from './component.js'
import { setState } from './interfaces.js'
import style from './style.js'

@define('m-logo')
@paint(component, style)
class Logo extends Echo(HTMLElement) {
  #internals
  #onColor

  get onColor() {
    return (this.#onColor ??= false)
  }

  @attributeChanged('on-color', booleanAttribute)
  set onColor(value) {
    this.#onColor = value
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.#internals = this.attachInternals()
  }

  [setState]() {
    this.onColor
      ? this.#internals.states.add('oncolor')
      : this.#internals.states.delete('oncolor')
    return this
  }
}

export default Logo
