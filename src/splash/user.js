import cookie from '@cookie'
import Result from '@result'

class User {
  static isAuthenticated() {
    return cookie.access_token ? Result.Authorized() : Result.Unauthorized()
  }
}

export default User
