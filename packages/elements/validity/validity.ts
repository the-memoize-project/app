import { attributeChanged, define } from '@directive'
import { paint } from '@dom'
import Echo from '@echo'
import { prevent } from '@event'
import relay from '@relay'
import component from './component.js'
import { setState } from './interfaces.js'
import style from './style.js'

@define('m-validity')
@paint(component, style)
class Validity extends Echo(HTMLElement) {
  #internals
  #state

  get state() {
    return this.#state
  }

  @attributeChanged('state')
  set state(value) {
    this.#state = value
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.#internals = this.attachInternals()
  }

  @relay.change()
  @relay.invalid(prevent)
  [setState]() {
    this.parentElement.validity[this.state]
      ? this.#internals.states.add('invalid')
      : this.#internals.states.delete('invalid')
    return this
  }
}

export default Validity
