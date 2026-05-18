import Result from '@result'

class User {
  static isItAuthenticated() {
    return Result.Expired()
  }
}

export default User
