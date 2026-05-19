import { connected, define } from '@directive'
import { paint } from '@dom'
import component from './component'
import Google from './google'
import { hiddable } from './interfaces'
import style from './style'

@define('m-continue-with-google')
@paint(component, style)
class ContinueWithGoogle extends HTMLElement {
  get href() {
    return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${Google.clientID}&redirect_uri=${Google.redirectURI}&response_type=code&scope=openid+email+profile`
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @connected
  [hiddable]() {
    return this
  }
}

export default ContinueWithGoogle
