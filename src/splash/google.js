import cookie from '@cookie'
import Result from '@result'

class Google {
  static async isAuthorized() {
    const ok = await fetch(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${cookie.access_token}`,
    )
      .then((response) => response.ok)
      .catch(() => false)

    return ok ? Result.Authorized() : Result.Unauthorized()
  }
}

export default Google
