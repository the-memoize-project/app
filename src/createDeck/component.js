import { html } from '@dom'
import { urlFor } from '@router'

const component = () =>
  html`
    <m-header>
      <m-button name="back-to-dashabord" slot="leading" variant="link" icononly>
        <m-icon use="arrow_back" size="sm" color="primary"></m-icon>
        <m-redirect on="back-to-dashabord/click:method/go" href="${urlFor('dashboard')}"></m-redirect>
      </m-button>
    </m-header>
    <create-deck>
      <header>
        <m-text size="xxxs" color="master">Deck</m-text>
        <m-text size="md" family="highlight" weight="bold">Nova da coleção</m-text>
      </header>
      <m-form>
        <template>
          <create-deck-cover></create-deck-cover>
          <m-input name="name" width="fill" required>
            <m-label>Nome</m-label>
            <m-validity state="valueMissing">Nome é obrigatório</m-validity>
          </m-input>
          <m-textarea name="description" width="fill" required>
            <m-label>Descrição</m-label>
            <m-validity state="valueMissing">Descrição é obrigatória</m-validity>
          </m-textarea>
          <m-button width="100%">Criar coleção</m-button>
        </template>
      </m-form>
    </create-deck>
    <m-footer>
      <m-text slot="leading" size="xxxs">© 2025 Memoize. Todos os direitos reservados.</m-text>
    </m-footer>
  `

export default component
