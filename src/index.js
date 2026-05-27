import '@polyfill'
import '@elements'

import './createDeck'
import './dashboard'
import './signIn'
import './signOut'
import './splash'

import router from '@router'

window.addEventListener('popstate', router.handle)
window.addEventListener('pushstate', router.handle)

router.handle()
