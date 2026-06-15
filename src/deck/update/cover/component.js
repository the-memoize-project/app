import { html } from '@dom'

function component(cover) {
  return html`
    <label>
      <input type="file" accept="image/*" name="cover" />
      <icon>
        <m-icon use="cloud_upload" size="md" color="primary"></m-icon>
      </icon>
      <m-stack direction="column" spacing="none" align="center">
        <m-text size="xxs" weight="bold">Imagem de Capa</m-text>
        <m-text size="xxxs" color="master">
          ${cover.file?.name ?? 'Selecione uma imagem para representar a coleção'}
        </m-text>
      </m-stack>
    </label>
  `
}

export default component
