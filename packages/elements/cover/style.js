import { css } from '@dom'

function style() {
  return css`
    :host {
      aspect-ratio: 16 / 9;
      background-color: var(--color-pure-white);
      border-radius: var(--border-radius-md);
      box-sizing: border-box;

      img {
        display: block;
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }

  `
}

export default style
