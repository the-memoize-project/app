import { define } from '@directive'
import { paint } from '@dom'
import component from './component'
import style from './style'

@define('m-dashboard-routine')
@paint(component, style)
class Routine extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
}

export default Routine
