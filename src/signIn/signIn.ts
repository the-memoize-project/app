import { define } from '@directive'
import { paint, willPaint } from '@dom'
import renderer from '@renderer'
import router, { args } from '@router'
import component from './component'
import Google from './google'
import { onCallback } from './interfaces'
import Navigate from './navigate'
import Session from './session'

@define('m-sign-in')
@paint(component)
class SignIn extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @willPaint
  async [onCallback]() {
    const result = await Google.exchange(args.code)
    return result.match({
      Authorized: (data) => {
        Session.persist(data)
        Navigate.toDashboard()
      },
      Unauthorized: () => Navigate.toSplash(),
    })
  }

  static {
    router('/sign-in', function signIn() {
      renderer('<m-sign-in></m-sign-in>')
    })
  }
}

export default SignIn
