import { css } from '@dom'

function style() {
  return css`
    main {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-md);
      margin: 0 auto;
      max-width: 480px;
      min-height: calc(100svh - 144px);
      padding: var(--spacing_inset-xs);
      width: 100%;
    }

    .cover {
      border-radius: var(--border-radius-md, 12px);
      overflow: hidden;
      aspect-ratio: 16 / 9;
      background-color: var(--color-surface-variant, #f0f0f0);
      position: relative;
    }

    .cover img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .cover__placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      padding: var(--spacing_inset-sm);
      box-sizing: border-box;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
    }

    .info__name {
      margin: 0;
      font-size: var(--font-size-lg, 1.25rem);
      font-weight: 700;
      color: var(--color-on-surface, #1a1a1a);
    }

    .info__description {
      margin: 0;
      font-size: var(--font-size-sm, 0.875rem);
      color: var(--color-on-surface-variant, #555);
      line-height: 1.5;
    }
  `
}

export default style
