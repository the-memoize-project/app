import { attributeChanged, define } from '@directive'
import { paint, repaint } from '@dom'
import Echo from '@echo'
import component from './component.js'
import style from './style.js'

@define('m-footer')
@paint(component, style)
class Footer extends Echo(HTMLElement) {
  #color

  get color() {
    return (this.#color ??= 'master-lightest')
  }

  @attributeChanged('color')
  @repaint
  set color(value) {
    this.#color = value
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
}

export default Footer
