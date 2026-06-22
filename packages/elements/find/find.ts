import { attributeChanged, define } from '@directive'
import Echo from '@echo'
import { customEvent } from '@event'
import { after } from '@middleware'
import { Headless } from '@mixin'
import { dispatch } from './interfaces'

@define('m-find')
class Find extends Headless(Echo(HTMLElement)) {
  #value

  get value() {
    return (this.#value ??= '')
  }

  @attributeChanged('value')
  @after(dispatch)
  set value(value) {
    this.#value = value
  }

  async [dispatch]() {
    await customElements.whenDefined(this.parentElement?.localName)
    const { data, error } = await this.parentElement.get(this.value)
    error
      ? this.parentElement.dispatchEvent(customEvent('failed', error))
      : this.parentElement.dispatchEvent(customEvent('finded', data))
    return this
  }
}

export default Find
