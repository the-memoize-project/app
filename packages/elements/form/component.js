import { html } from '@dom'

function component(self) {
  return html`
    <form>
      ${self.content}
    </form>
  `
}

export default component
