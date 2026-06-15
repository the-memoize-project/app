import { css } from '@dom'

function style() {
  return css`
    :host {
      box-sizing: border-box;
      width: 100%;

      input {
        display: none;
      }

      label {
        align-items: center;
        background-color: transparent;
        border: var(--border-width-hairline) solid var(--color-master-light);
        border-radius: var(--border-radius-sm);
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: var(--spacing_inset-xs);
        justify-content: center;
        padding: var(--spacing-xl) var(--spacing-md);
        width: 100%;

        &:hover {
          border-color: var(--color-primary);
        }

        icon {
          align-items: center;
          background-color: var(--color-primary-lighter);
          border-radius: var(--border-radius-circular);
          display: flex;
          height: 48px;
          justify-content: center;
          width: 48px;
        }
      }
    }
  `
}

export default style
