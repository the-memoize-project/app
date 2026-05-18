import { html } from '@dom'

function component() {
  return html`
    <span>
      <slot></slot>
    </span>
  `
}

export default component
