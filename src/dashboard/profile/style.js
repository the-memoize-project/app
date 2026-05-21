import { css } from '@dom'

function style() {
  return css`
    :host {
      width: 100%;

      img {
        aspect-ratio: 1 / 1;
        background-color: var(--color-master-light);
        border-radius: var(--border-radius-circular);
        color: transparent;
        height: 120px;
      }
    }
  `
}

export default style
