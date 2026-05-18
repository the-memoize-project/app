import { css } from '@dom'

function style(self) {
  return css`
    :host {
      align-items: ${self.align};
      display: ${self.display};
      justify-content: ${self.justify};
      width: 100%;
    }
  `
}

export default style
