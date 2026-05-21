import { html } from '@dom'

function component(self) {
  return html`
    <m-stack direction="column" align="center">
      <avatar>
        <img alt="${self.name}" src="${self.avatar}" loading="lazy" />
        <data>
          <span>
            ${self.progress}
          </span>
          <m-icon use="cognition_2" size="xs" color="master-lightest"></m-icon>
        </data>
      </avatar>
      <m-stack direction="column" align="center" spacing="none">
        <m-text family="highlight" size="sm" weight="bold" align="center">${self.name}</m-text>
        <m-text size="xxxs" color="master" align="center">${self.goal}</m-text>
      </m-stack>
    </m-stack>
  `
}

export default component
