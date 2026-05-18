import cookie from '@app/platform/http/cookie'
import { urlFor } from '@app/platform/http/router'

class Redirect {
  static toHome() {
    return new Response(null, {
      status: 302,
      headers: {
        Location: urlFor('home'),
        'Set-Cookie': `${cookie.toStringify()};Path=/;HttpOnly;SameSite=Lax`,
      },
    })
  }
}

export default Redirect
