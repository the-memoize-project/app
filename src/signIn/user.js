import env from '@app/platform/env'
import cookie from '@app/platform/http/cookie'

class User {
  static async signIn(data) {
    cookie.access_token = data.accessToken
    ;(await env.ACCOUNT.get(data.key, { type: 'json' })) ??
      (await env.ACCOUNT.put(data.key, JSON.stringify(data)))
    return User
  }
}

export default User
