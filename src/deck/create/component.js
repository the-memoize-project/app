import { html } from '@dom'
import { urlFor } from '@router'

const component = () =>
  html`
    <m-header>
      <m-button name="back-to-dashabord" slot="leading" variant="icon">
        <m-icon use="arrow_back" size="sm" color="primary"></m-icon>
        <m-redirect on="back-to-dashabord/clicked:method/go" href="${urlFor('dashboard')}"></m-redirect>
      </m-button>
    </m-header>
    <main>
      <header>
        <m-text size="xxxs" color="master">Deck</m-text>
        <m-text size="md" family="highlight" weight="bold">Nova da coleção</m-text>
      </header>
      <m-form>
        <template>
          <m-fileupload name="cover" width="fill" required>
            <m-label>Imagem de Capa</m-label>
            <m-helper>Selecione uma imagem para representar a coleção</m-helper>
            <m-validity state="valueMissing">Imagem de capa é obrigatória</m-validity>
          </m-fileupload>
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
    </main>
    <m-footer>
      <m-text slot="leading" size="xxxs">© 2025 Memoize. Todos os direitos reservados.</m-text>
    </m-footer>
  `

export default component
