import { urlFor } from '@router'

class Navigate {
  static goToDeck(id) {
    history.pushState({}, '', urlFor('deck', { id }))
    return Navigate
  }

  static goToError() {
    history.pushState({}, '', urlFor('error'))
    return Navigate
  }
}

export default Navigate
