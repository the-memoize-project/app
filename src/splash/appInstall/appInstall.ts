import { define } from '@directive'
import { didPaint, paint, repaint } from '@dom'
import on from '@event'
import component from './component'
import { setDisplay } from './interfaces'
import onAPPInstalled from './onAppInstalled'
import onBeforeInstallPrompt from './onBeforeInstallPrompt'
import style from './style'

@define('m-app-install')
@paint(component, style)
class APPInstall extends HTMLElement {
  #event

  get visible() {
    return !!this.#event
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @on.click(':host m-button')
  click() {
    this.#event?.prompt()
    return this
  }

  @onAPPInstalled
  @repaint
  hide() {
    this.#event = undefined
    return this
  }

  @onBeforeInstallPrompt
  @repaint
  show(event) {
    this.#event = event
    return this
  }

  @didPaint
  [setDisplay]() {
    this.visible
      ? this.style.removeProperty('display')
      : this.style.setProperty('display', 'none')
    return this
  }
}

export default APPInstall
