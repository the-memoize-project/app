import { html } from '@dom'
import icon from './icon'

function component() {
  return html`
    ${icon} <slot></slot>
  `
}

export default component
