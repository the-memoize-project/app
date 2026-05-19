import { define } from '@directive'
import { paint, willPaint } from '@dom'
import renderer from '@renderer'
import router from '@router'
import component from './component'
import { handle } from './interfaces'
import style from './style'

@define('m-dashboard')
@paint(component, style)
class Dashboard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @willPaint
  [handle]() {
    return this
  }

  static {
    router('/dashboard', function dashboard() {
      renderer('<m-dashboard></m-dashboard>')
    })
  }
}

export default Dashboard
