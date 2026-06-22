import { html } from '@dom'
import { params, urlFor } from '@router'
import { state } from './interfaces'

const component = ({ [state]: deck }) =>
  html`
    <m-header>
      <m-button name="back-to-deck" slot="leading" variant="icon">
        <m-icon use="arrow_back" size="sm" color="primary"></m-icon>
        <m-redirect on="back-to-deck/clicked:method/go" href="${urlFor('deck', { id: deck.id })}"></m-redirect>
      </m-button>
    </m-header>
    <main>
      <header>
        <m-text size="xxxs" color="master">Deck</m-text>
        <m-text size="md" family="highlight" weight="bold">Editar coleção</m-text>
      </header>
      <m-form>
        <template>
          <m-input name="id" value="{id}" hidden></m-input>
          <m-fileupload name="cover" file="{cover}" width="fill" required>
            <m-label>Imagem de Capa</m-label>
            <m-helper>Selecione uma imagem para representar a coleção</m-helper>
            <m-validity state="valueMissing">Imagem de capa é obrigatória</m-validity>
          </m-fileupload>
          <m-input name="name" value="{name}" width="fill" required>
            <m-label>Nome</m-label>
            <m-validity state="valueMissing">Nome é obrigatório</m-validity>
          </m-input>
          <m-textarea name="description" value="{description}" width="fill" required>
            <m-label>Descrição</m-label>
            <m-validity state="valueMissing">Descrição é obrigatória</m-validity>
          </m-textarea>
          <m-button width="100%">Salvar coleção</m-button>
        </template>
        <m-on value="m-dataset/finded:method/render"></m-on>
      </m-form>
      <m-dataset name="deck">
        <m-find value="${params.id}"></m-find>
      </m-dataset>
    </main>
    <m-footer>
      <m-text slot="leading" size="xxxs">© 2025 Memoize. Todos os direitos reservados.</m-text>
    </m-footer>
  `

export default component
