import { html } from '@dom'
import { urlFor } from '@router'
import { state } from './interfaces'

const component = ({ [state]: decks }) =>
  html`
    <header>
      <m-text size="xs" family="highlight" weight="bold">Coleções</m-text>
      <m-button name="create-deck" variant="icon">
        <m-icon use="add" size="sm" color="primary"></m-icon>
        <m-redirect on="create-deck/clicked:method/go" href="${urlFor('createDeck')}"></m-redirect>
      </m-button>
    </header>
    <shelf>
      ${decks.map(
        (deck) => html`
          <deck data-id="${deck.id}">
            <thumbnail>
              <img src="${deck.cover}" alt="${deck.name}" />
            </thumbnail>
            <progressbar>
              <fill style="width: 0%"></fill>
            </progressbar>
            <m-text size="xxs" weight="medium">${deck.name}</m-text>
          </deck>
        `,
      )}
    </shelf>
  `

export default component
