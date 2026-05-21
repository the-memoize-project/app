import { html } from '@dom'

function component(self) {
  return html`
    <m-stack direction="row" align="center" justify="center" spacing="md">
      <m-stack align="center" spacing="nano" width="auto">
        <m-icon use="cognition_2" size="xs" color="master-dark"></m-icon>
        <m-text size="xs" weight="bold">${self.cards}</m-text>
      </m-stack>
      <m-stack align="center" spacing="nano" width="auto">
        <m-icon use="calendar_check" size="xs" color="master-dark"></m-icon>
        <m-text size="xs" weight="bold">${self.reviews}</m-text>
      </m-stack>
      <m-stack align="center" spacing="nano" width="auto">
        <m-icon use="timer" size="xs" color="master-dark"></m-icon>
        <m-text size="xs" weight="bold">${self.time}</m-text>
      </m-stack>
    </m-stack>
  `
}

export default component
