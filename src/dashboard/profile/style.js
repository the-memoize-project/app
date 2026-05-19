import { css } from '@dom'

function style() {
  return css`
    :host {
      width: 100%;

      avatar {
        align-items: center;
        display: flex;
        flex-direction: column;
        position: relative;

        img {
          aspect-ratio: 1 / 1;
          border-radius: var(--border-radius-circular);
          height: 120px;
        }

        data {
          align-items: center;
          background-color: var(--color-primary);
          border-radius: var(--border-radius-pill);
          bottom: -6px;
          box-sizing: border-box;
          display: flex;
          gap: var(--spacing_inset-quarck);
          height: 24px;
          justify-content: center;
          padding: 0 4px 0 7px;
          position: absolute;

          span {
            color: var(--color-master-lightest);
            font-family: var(--font-family-base);
            font-size: var(--font-size-xxs);
            font-weight: var(--font-weight-medium);
            letter-spacing: 0.38px;
            line-height: 1;
          }

          svg {
            color: var(--color-master-lightest);
            height: 16px;
            width: 16px;
          }
        }
      }
    }
  `
}

export default style
