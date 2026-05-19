import { urlFor } from '@router'

class Navigate {
  static toDashboard() {
    history.pushState({}, '', urlFor('dashboard'))
    return Navigate
  }

  static toSplash() {
    history.pushState({}, '', urlFor('splash'))
    return Navigate
  }
}

export default Navigate
