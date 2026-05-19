import { urlFor } from '@router'

class Navigate {
  static toSplash() {
    history.pushState({}, '', urlFor('splash'))
    return Navigate
  }
}

export default Navigate
