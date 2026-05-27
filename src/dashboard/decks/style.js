import { css } from '@dom'

function style() {
  return css`
    :host {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      width: 100%;

      header {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

      grid {
        box-sizing: border-box;
        display: grid;
        gap: var(--spacing_inset-xs);
        grid-template-columns: 1fr 1fr;
      }

      deck {
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: var(--spacing_inset-nano);

        thumbnail {
          box-sizing: border-box;
          aspect-ratio: 3 / 4;
          background-color: var(--color-master-lighter);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          width: 100%;
        }

        progressbar {
          background-color: var(--color-pure-white);
          border-radius: var(--border-radius-pill);
          bottom: var(--spacing_inset-quarck);
          display: block;
          height: 6px;
          overflow: hidden;
          right: var(--spacing_inset-quarck);

          fill {
            background-color: var(--color-primary);
            border-radius: var(--border-radius-pill);
            display: block;
            height: 100%;
          }
        }
      }
    }
  `
}

export default style
