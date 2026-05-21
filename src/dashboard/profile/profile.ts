import cookie from '@cookie'
import { define } from '@directive'
import { paint } from '@dom'
import component from './component'
import style from './style'

@define('m-dashboard-profile')
@paint(component, style)
class Profile extends HTMLElement {
  get avatar() {
    return cookie.avatar_url
  }

  get goal() {
    return 'Quero gravar OOP em JS puro e Web Components, dominar patterns e perf, liderar times e entregar UIs modulares e ultra-rápidas. ⚡'
  }

  get name() {
    return cookie.name
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
}

export default Profile
