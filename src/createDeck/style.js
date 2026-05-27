import { css } from '@dom'

function style() {
  return css`
    create-deck {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-md);
      margin: 0 auto;
      max-width: 480px;
      min-height: calc(100svh - 144px);
      padding: var(--spacing_inset-xs);
      width: 100%;

      header {
        display: flex;
        flex-direction: column;
        gap: var(--spacing_inset-quarck);
      }

      cover {
        align-items: center;
        background-color: var(--color-master-lighter);
        border-radius: var(--border-radius-sm);
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: var(--spacing_inset-nano);
        justify-content: center;
        min-height: 160px;
        padding: var(--spacing_inset-md);
        width: 100%;
      }

      fields {
        display: flex;
        flex-direction: column;
        gap: var(--spacing_inset-sm);

        field {
          display: flex;
          flex-direction: column;
          gap: var(--spacing_inset-nano);

          textarea {
            appearance: none;
            background-color: transparent;
            border: var(--border-width-thin) solid var(--color-master-light);
            border-radius: var(--border-radius-sm);
            box-sizing: border-box;
            color: var(--color-master-dark);
            font-family: var(--font-family-base);
            font-size: var(--font-size-xs);
            font-weight: var(--font-weight-regular);
            letter-spacing: 0.38px;
            line-height: var(--line-height-default);
            padding: var(--spacing_inset-xs);
            resize: none;
            width: 100%;

            &:focus {
              outline: 0;
            }

            &::placeholder {
              color: var(--color-master);
            }
          }
        }
      }
    }
  `
}

export default style
