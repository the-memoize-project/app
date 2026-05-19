import { define } from '@directive'
import { paint, willPaint } from '@dom'
import renderer from '@renderer'
import router from '@router'
import component from './component'
import { handle } from './interfaces'
import Navigate from './navigate'
import Session from './session'

@define('m-sign-out')
@paint(component)
class SignOut extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @willPaint
  [handle]() {
    Session.clear()
    Navigate.toSplash()
  }

  static {
    router('/sign-out', function signOut() {
      renderer('<m-sign-out></m-sign-out>')
    })
  }
}

export default SignOut
