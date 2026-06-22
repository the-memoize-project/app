import { html } from '@dom'
import { urlFor } from '@router'
import { state } from './interfaces'

const component = ({ [state]: deck }) =>
  html`
    <m-header>
      <m-button name="back-to-dashboard" slot="leading" variant="icon">
        <m-icon use="arrow_back" size="sm" color="primary"></m-icon>
        <m-redirect on="back-to-dashboard/clicked:method/go" href="${urlFor('dashboard')}"></m-redirect>
      </m-button>
      <m-button name="go-to-edit" slot="trailing" variant="icon">
        <m-icon use="more_vert" size="sm" color="primary"></m-icon>
        <m-redirect on="go-to-edit/clicked:method/go" href="${urlFor('editDeck', { id: deck.id })}"></m-redirect>
      </m-button>
    </m-header>
    <main>
      <div class="cover">
        <img src="${deck.cover}" alt="${deck.name}" />
      </div>
      <section class="info">
        <m-text size="lg" weight="bold" color="master-dark">${deck.name}</m-text>
        <m-text size="xxs" color="master-dark">${deck.description}</m-text>
      </section>
      <m-study deck-id="${deck.id}"></m-study>
      <m-shelf deck-id="${deck.id}"></m-shelf>
    </main>
    <m-footer>
      <m-text slot="leading" size="xxxs">© 2025 Memoize. Todos os direitos reservados.</m-text>
    </m-footer>
  `

export default component
