const cookie = new Proxy(
  {},
  {
    get: (_, key) =>
      document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`)?.pop(),

    set: (_, key, value) => {
      document.cookie = `${key}=${value}; path=/; max-age=31536000`
      return true
    },
  },
)

export default cookie
