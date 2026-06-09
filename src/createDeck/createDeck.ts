import { define } from '@directive'
import { paint } from '@dom'
import on, { detail } from '@event'
import renderer from '@renderer'
import router, { urlFor } from '@router'
import DB from '@storage'
import component from './component'
import style from './style'

@define('m-create-deck')
@paint(component, style)
class CreateDeck extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @on.submitted('m-form', detail)
  async persist(data) {
    const db = await DB.open()
    const deck = await db.deck.add(data)
    history.pushState({}, '', urlFor('deck', deck))
    return this
  }

  static {
    router('/deck/create', function createDeck() {
      renderer('<m-create-deck></m-create-deck>')
    })
  }
}

export default CreateDeck
