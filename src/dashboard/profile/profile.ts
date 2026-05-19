import { define } from '@directive'
import { paint, willPaint } from '@dom'
import component from './component'
import { hydrate } from './interfaces'
import Progress from './progress'
import style from './style'
import User from './user'

@define('m-dashboard-profile')
@paint(component, style)
class Profile extends HTMLElement {
  #user
  #progress

  get avatar() {
    return this.#user.avatar
  }

  get goal() {
    return this.#user.goal
  }

  get name() {
    return this.#user.name
  }

  get progress() {
    return (this.#progress.total ??= {})
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @willPaint
  async [hydrate]() {
    this.#user = await User.logged()
    this.#progress = await Progress.ofUserLogged()
    return this
  }
}

export default Profile
