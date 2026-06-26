import { css } from '@dom'

function style() {
  return css`
    :host {
      box-sizing: border-box;
      width: 100%;
    }

    a {
      align-items: center;
      background-color: var(--color-primary);
      border-radius: var(--border-radius-sm);
      color: var(--color-master-lightest);
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      font-weight: var(--font-weight-medium);
      gap: var(--spacing_inset-nano);
      height: 40px;
      justify-content: center;
      padding: 0 var(--spacing_inset-xs);
      position: relative;
      text-decoration: none;

      img {
        aspect-ration: 1 / 1;
        height: 24px;
      }
    }
  `
}

export default style
