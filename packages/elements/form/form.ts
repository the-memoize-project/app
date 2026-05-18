import { define } from '@directive'
import { paint } from '@dom'
import Echo, { dispatchEvent } from '@echo'
import on, { formData, prevent, stop } from '@event'
import component from './component.js'
import { reset, submit } from './interfaces.js'
import style from './style.js'
import Template from './template'

@define('m-form')
@paint(component, style)
class Form extends Echo(HTMLElement) {
  #template = Template.from(this)

  get content() {
    return this.#template.content
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  reset() {
    const init = { bubbles: true, cancelable: true }
    const event = new Event('reset', init)
    this.shadowRoot.querySelector('form').dispatchEvent(event)
    return this
  }

  @on.reset('form', stop)
  @dispatchEvent('reset')
  [reset]() {
    return {}
  }

  submit() {
    const init = { bubbles: true, cancelable: true }
    const event = new Event('submit', init)
    this.shadowRoot.querySelector('form').dispatchEvent(event)
    return this
  }

  @on.submit('form', prevent, stop, formData)
  @dispatchEvent('submit')
  [submit](data) {
    return data
  }
}

export default Form
