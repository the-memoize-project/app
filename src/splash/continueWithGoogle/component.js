import { html } from '@dom'
import google from './google.png'

const component = (prop) =>
  html`
    <a href="${prop.href}">
      <img src="${google}" alt="Continuar com o Google" loading="eager" />
      Continuar com o Google
    </a>
  `

export default component
