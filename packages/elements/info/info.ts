import { define } from '@directive'
import { paint } from '@dom'
import Echo from '@echo'
import component from './component.js'
import style from './style.js'

@define('m-info')
@paint(component, style)
class Info extends Echo(HTMLElement) {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
}

export default Info
