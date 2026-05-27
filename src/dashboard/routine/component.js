import { html } from '@dom'

function component() {
  return html`
    <m-text size="xs" weight="bold">Rotina de estudos</m-text>
    <week>
      <day done><m-icon use="check" size="xs"></m-icon></day>
      <day done><m-icon use="check" size="xs"></m-icon></day>
      <day done><m-icon use="check" size="xs"></m-icon></day>
      <day><m-text size="xxs" weight="medium">Q</m-text></day>
      <day><m-text size="xxs" weight="medium">Q</m-text></day>
      <day><m-text size="xxs" weight="medium">S</m-text></day>
      <day><m-text size="xxs" weight="medium">S</m-text></day>
    </week>
    <prompt>
      <m-text size="xxxs">Há <strong>34 revisões</strong> aguardando você</m-text>
      <m-button size="sm" width="200px">Revisar agora</m-button>
    </prompt>
  `
}

export default component
