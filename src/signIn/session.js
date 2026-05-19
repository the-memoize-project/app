import cookie from '@cookie'

class Session {
  static persist(data) {
    cookie.access_token = data.accessToken
    cookie.avatar_url = data.avatarUrl
    cookie.email = data.email
    cookie.sub = data.key
    cookie.name = data.name
    return Session
  }
}

export default Session
