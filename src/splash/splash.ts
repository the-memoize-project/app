import { define } from '@directive'
import { paint, willPaint } from '@dom'
import renderer from '@renderer'
import router from '@router'
import component from './component'
import { handle } from './interfaces'
import Navigate from './navigate'
import style from './style'
import User from './user'

@define('m-splash')
@paint(component, style)
class Splash extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @willPaint
  [handle]() {
    User.isAuthenticated().match({
      Authorized: () => Navigate.goToDashboard(),
    })
    return this
  }

  static {
    router('/', function splash() {
      renderer('<m-splash></m-splash>')
    })
  }
}

export default Splash
