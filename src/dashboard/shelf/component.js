import { html } from '@dom'
import { urlFor } from '@router'

const component = () =>
  html`
    <header>
      <m-text size="xs" family="highlight" weight="bold">Coleções</m-text>
      <m-button name="create-deck" variant="icon">
        <m-icon use="add" size="sm" color="primary"></m-icon>
        <m-redirect on="create-deck/clicked:method/go" href="${urlFor('createDeck')}"></m-redirect>
      </m-button>
    </header>
    <m-render layout="grid" on="m-dataset/loaded:method/render">
      <template>
        <m-card>
          <m-inset side="top">
            <m-cover src="{cover}" alt="{name}"></m-cover>
          </m-inset>
          <m-progressbar value="30"></m-progressbar>
          <m-text size="xxs" weight="medium">{name}</m-text>
        </m-card>
      </template>
    </m-render>
    <m-dataset store="deck">
      <m-load></m-load>
    </m-dataset>
  `

export default component
