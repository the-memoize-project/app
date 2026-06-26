import { attributeChanged, define } from '@directive'
import { paint, repaint } from '@dom'
import Echo from '@echo'
import component from './component.js'
import style from './style.js'

@define('m-cover')
@paint(component, style)
class Cover extends Echo(HTMLElement) {
  #alt
  #src

  get alt() {
    return (this.#alt ??= '')
  }

  @attributeChanged('alt')
  @repaint
  set alt(value) {
    this.#alt = value
  }

  get src() {
    return (this.#src ??= '')
  }

  @attributeChanged('src')
  @repaint
  set src(value) {
    this.#src = value
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
}

export default Cover
