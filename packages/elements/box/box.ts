import {
  attributeChanged,
  booleanAttribute,
  define,
  resizing,
} from '@directive'
import { paint, repaint } from '@dom'
import Echo from '@echo'
import { visibility } from '@interface'
import component from './component.js'
import style from './style.js'

@define('m-box')
@paint(component, style)
class Box extends Echo(HTMLElement) {
  #elevated
  #internals
  #height
  #outlined
  #width

  get elevated() {
    return (this.#elevated ??= false)
  }

  @attributeChanged('elevated', booleanAttribute)
  set elevated(value) {
    this.#elevated = value
  }

  get height() {
    return (this.#height ??= 'auto')
  }

  @attributeChanged('height', resizing)
  @repaint
  set height(value) {
    this.#height = value
  }

  get outlined() {
    return (this.#outlined ??= false)
  }

  @attributeChanged('outlined', booleanAttribute)
  set outlined(value) {
    this.#outlined = value
  }

  get width() {
    return (this.#width ??= '100%')
  }

  @attributeChanged('width', resizing)
  @repaint
  set width(value) {
    this.#width = value
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.#internals = this.attachInternals()
  }

  [visibility]() {
    this.elevated
      ? this.#internals.states.add('elevated')
      : this.#internals.states.delete('elevated')

    this.outlined
      ? this.#internals.states.add('outlined')
      : this.#internals.states.delete('outlined')

    return this
  }
}

export default Box
