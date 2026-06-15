import { html } from '@dom'
import { urlFor } from '@router'

const component = (deck) =>
  html`
    <m-header>
      <m-button name="back-to-dashboard" slot="leading" variant="icon">
        <m-icon use="arrow_back" size="sm" color="primary"></m-icon>
        <m-redirect on="back-to-dashboard/clicked:method/go" href="${urlFor('dashboard')}"></m-redirect>
      </m-button>
    </m-header>
    <main>
      <div class="cover">
        <img src="${deck.cover}" alt="${deck.name}" />
      </div>
      <section class="info">
        <h1 class="info__name">${deck.name}</h1>
        <p class="info__description">${deck.description}</p>
      </section>
    </main>
    <m-footer>
      <m-text slot="leading" size="xxxs">© 2025 Memoize. Todos os direitos reservados.</m-text>
    </m-footer>
  `

export default component
