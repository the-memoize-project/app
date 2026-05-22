import { css } from '@dom'

function style() {
  return css`
    :host {
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-md);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      padding: var(--spacing_inset-xs);
      width: 100%;

      days {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        day {
          align-items: center;
          background-color: var(--color-master-lightest);
          border-radius: var(--border-radius-circular);
          color: var(--color-master);
          display: flex;
          font-family: var(--font-family-base);
          font-size: var(--font-size-xxs);
          font-weight: var(--font-weight-medium);
          height: 32px;
          justify-content: center;
          width: 32px;

          &[done] {
            background-color: var(--color-primary);
            color: var(--color-master-lightest);
          }
        }
      }


      footer {
        align-items: center;
        background-color: var(--color-master-lightest);
        border-radius: var(--border-radius-sm);
        display: flex;
        gap: var(--spacing_inset-xs);
        justify-content: space-between;
        padding: var(--spacing_inset-nano);
        padding-left: var(--spacing_inset-xs);
      }
    }
  `
}

export default style
