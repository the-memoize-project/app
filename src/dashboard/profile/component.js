import { html } from '@dom'

function component(self) {
  return html`
    <m-stack direction="column" align="center" spacing="md">
      <img alt="${self.name}" src="${self.avatar}" loading="lazy" />
      <m-stack direction="column" align="center" spacing="none">
        <m-text family="highlight" size="sm" weight="bold" align="center">${self.name}</m-text>
        <m-text size="xxxs" color="master" align="center">${self.goal}</m-text>
      </m-stack>
    </m-stack>
  `
}

export default component
