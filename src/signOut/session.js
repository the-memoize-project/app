import cookie from '@cookie'

class Session {
  static clear() {
    delete cookie.access_token
    delete cookie.avatar_url
    delete cookie.email
    delete cookie.sub
    delete cookie.name
    return Session
  }
}

export default Session
