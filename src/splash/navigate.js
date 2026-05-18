import { urlFor } from '@router'

class Navigate {
  static goToDashboard() {
    history.pushState({ name: 'Cleitobas' }, '', urlFor('dashboard'))
    return Navigate
  }
}

export default Navigate
