import { html } from '@dom'

function component(self) {
  return html`
    <m-stack direction="row" align="center" justify="center" spacing="md">
      <stat>
        <m-icon use="cognition_2" size="sm" color="master-dark"></m-icon>
        <m-text size="sm" weight="bold">${self.cards}</m-text>
      </stat>
      <stat>
        <m-icon use="calendar_check" size="sm" color="master-dark"></m-icon>
        <m-text size="sm" weight="bold">${self.reviews}</m-text>
      </stat>
      <stat>
        <m-icon use="timer" size="sm" color="master-dark"></m-icon>
        <m-text size="sm" weight="bold">${self.time}</m-text>
      </stat>
    </m-stack>
  `
}

export default component
