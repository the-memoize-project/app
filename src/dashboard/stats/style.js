import { css } from '@dom'

function style() {
  return css`
    :host {
      width: 100%;

      m-stack {
        width: 100%;
      }

      stat {
        align-items: center;
        display: flex;
        gap: var(--spacing_inset-quarck);
        justify-content: center;

        svg {
          color: var(--color-master);
          flex-shrink: 0;
          height: 20px;
          width: 20px;
        }
      }
    }
  `
}

export default style
