import '@polyfill'
import '@elements'

import './dashboard'
import './deck'
import './signIn'
import './signOut'
import './splash'

import router from '@router'

window.addEventListener('popstate', router.handle)
window.addEventListener('pushstate', router.handle)

router.handle()
