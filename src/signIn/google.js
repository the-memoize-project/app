import Result from '@result'

class Google {
  static async exchange(code) {
    const accessToken = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
        redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
    })
      .then((response) => response.json())
      .then((json) => json.access_token)

    if (!accessToken) return Result.Unauthorized()

    const user = await fetch(
      'https://openidconnect.googleapis.com/v1/userinfo',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
      .then((response) => response.json())
      .then((json) => ({
        accessToken,
        avatarUrl: json.picture,
        email: json.email,
        key: json.sub,
        name: json.name,
      }))

    return user ? Result.Authorized(user) : Result.Unauthorized()
  }
}

export default Google
