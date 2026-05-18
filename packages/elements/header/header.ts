import { attributeChanged, define } from '@directive'
import { paint, repaint } from '@dom'
import Echo, { dispatchEvent } from '@echo'
import component from './component.js'
import style from './style.js'

@define('m-header')
@paint(component, style)
class Header extends Echo(HTMLElement) {
  #color

  get color() {
    return (this.#color ??= 'master-lightest')
  }

  @attributeChanged('color')
  @dispatchEvent('color')
  @repaint
  set color(value) {
    this.#color = value
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
}

export default Header
