import router, { args } from '@app/platform/http/router'
import Google from './google'
import Redirect from './redirect'
import User from './user'

router.get('/auth/callback', async function callback() {
  const authorization = await Google.authorization(args.code)
  return await authorization.match({
    async Ok(data) {
      await User.signIn(data)
      return Redirect.toHome()
    },
    Error() {
      return Response.redirect(null, 302)
    },
  })
})
