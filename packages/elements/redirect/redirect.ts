import { attributeChanged, define } from '@directive'
import Echo from '@echo'
import Headless from '@mixin/headless'

@define('m-redirect')
class Redirect extends Headless(Echo(HTMLElement)) {
  #href

  get href() {
    return (this.#href ??= '#')
  }

  @attributeChanged('href')
  set href(value) {
    this.#href = value
  }

  go() {
    history.pushState({}, '', this.href)
    return this
  }
}

export default Redirect
