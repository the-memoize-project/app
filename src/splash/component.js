import { html } from '@dom'
import image from './image.svg'

function component() {
  return html`
    <m-header>
      <m-logo slot="leading"></m-logo>
    </m-header>
    <splash>
      <img alt="Memoize" src="${image}" loading="lazy" />
      <m-stack direction="column" spacing="nano">
        <hat>Esquecer é biologia</hat>
        <m-text color="master-darker" family="highlight" size="lg" weight="bold">Lembrar é <m-text color="primary" family="highlight" size="lg" weight="bold">método.</m-text></m-text>
        <m-text size="xxxs">O Memoize traz o conteúdo de volta no momento exato em que você está prestes a esquecê-lo. Sem maratona. Sem ansiedade.</m-text>
      </m-stack>
      <m-continue-with-google></m-continue-with-google>
      <m-app-install></m-app-install>
    </splash>
    <m-footer>
      <m-text slot="leading" size="xxxs">© 2026 Memoize · Todos os direitos reservados</m-text>
    </m-footer>
  `
}

export default component
