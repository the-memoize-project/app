import { html } from '@dom'

const component = () =>
  html`
    <m-header>
      <m-logo slot="leading"></m-logo>
    </m-header>
    <dashboard>
      <m-dashboard-profile></m-dashboard-profile>
      <m-dashboard-stats></m-dashboard-stats>
    </dashboard>
    <m-footer>
      <m-text slot="leading" size="xxxs">© 2026 Memoize · Todos os direitos reservados</m-text>
    </m-footer>

  `

export default component
