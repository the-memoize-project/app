import { html } from '@dom'
import { params, urlFor } from '@router'

const component = () =>
  html`
    <m-header>
      <m-button name="back-to-dashboard" slot="leading" variant="icon">
        <m-icon use="arrow_back" size="sm" color="primary"></m-icon>
        <m-redirect route="dashboard" on="back-to-dashboard/clicked:method/go"></m-redirect>
      </m-button>
      <m-button name="go-to-edit" slot="trailing" variant="icon">
        <m-icon use="more_vert" size="sm" color="primary"></m-icon>
        <m-redirect on="go-to-edit/clicked:method/go" href="${urlFor('editDeck', { id: params.id })}"></m-redirect>
      </m-button>
    </m-header>
    <m-render on="m-dataset/finded:method/render">
      <template>
        <m-main>
          <m-cover src="{cover}" alt="{name}"></m-cover>
          <section>
            <m-text size="lg" weight="bold" color="master-dark">{name}</m-text>
            <m-text size="xxs" color="master-dark">{description}</m-text>
          </section>
        </m-main>
      </template>
    </m-render>
    <m-dataset store="deck">
      <m-find key="id" value="${params.id}"></m-find>
    </m-dataset>
    <m-footer>
      <m-text slot="leading" size="xxxs">© 2025 Memoize. Todos os direitos reservados.</m-text>
    </m-footer>
  `

export default component
