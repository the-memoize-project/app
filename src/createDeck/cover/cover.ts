import { define, disconnected, formAssociated } from '@directive'
import { paint, repaint } from '@dom'
import on, { files } from '@event'
import component from './component'
import { change, reportable } from './interfaces'
import style from './style'

@define('create-deck-cover')
@paint(component, style)
class Cover extends HTMLElement {
  #controller
  #file

  get controller() {
    return (this.#controller ??= new AbortController())
  }

  get file() {
    return this.#file
  }

  @repaint
  set file(file) {
    this.#file = file
  }

  static get formAssociated() {
    return true
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @on.change('input', files)
  [change]([file]) {
    this.file = file
    return this
  }

  @disconnected
  remove() {
    super.remove()
    this.controller.abort()
    return this
  }

  @formAssociated
  [reportable](form) {
    const event = 'formdata'
    const listener = (e) => this.file && e.formData.append('cover', this.file)
    const options = { signal: this.controller.signal }
    form?.addEventListener?.(event, listener, options)
    return this
  }
}

export default Cover
