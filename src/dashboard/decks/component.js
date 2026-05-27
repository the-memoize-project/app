import { html } from '@dom'
import { urlFor } from '@router'

function component() {
  return html`
    <header>
      <m-text size="xs" family="highlight" weight="bold">Coleções</m-text>
      <m-button name="create-deck" variant="link" icononly>
        <m-icon use="add" size="sm" color="primary"></m-icon>
        <m-redirect on="create-deck/click:method/go" href="${urlFor('createDeck')}"></m-redirect>
      </m-button>
    </header>
    <grid>
      <deck>
        <thumbnail></thumbnail>
        <progressbar>
          <fill style="width: 30%"></fill>
        </progressbar>
        <m-text size="xxs" weight="medium">Javascript</m-text>
      </deck>
      <deck>
        <thumbnail></thumbnail>
        <progressbar>
          <fill style="width: 60%"></fill>
        </progressbar>
        <m-text size="xxs" weight="medium">HTML 5</m-text>
      </deck>
      <deck>
        <thumbnail></thumbnail>
        <progressbar><fill style="width: 10%"></fill></progressbar>
        <m-text size="xxs" weight="medium">CSS 3</m-text>
      </deck>
      <deck>
        <thumbnail></thumbnail>
        <progressbar>
          <fill style="width: 45%"></fill>
        </progressbar>
        <m-text size="xxs" weight="medium">English</m-text>
      </deck>
    </grid>
  `
}

export default component
