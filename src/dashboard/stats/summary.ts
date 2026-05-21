class Summary {
  #data

  get cards(): number {
    return (this.#data.cards ??= 0)
  }

  get reviews(): number {
    return (this.#data.reviews ??= 0)
  }

  get time(): string {
    const seconds: number = this.#data.time_seconds ?? 0
    const d = Math.floor(seconds / 86400)
    const h = Math.floor((seconds % 86400) / 3600)
    const m = Math.floor((seconds % 3600) / 60)

    const parts: string[] = []
    if (d > 0) parts.push(`${d}d`)
    if (h > 0) parts.push(`${h}h`)
    if (m > 0 || parts.length === 0) parts.push(`${m}m`)

    return parts.join(' ')
  }

  constructor(data) {
    this.#data = data
  }

  static async ofUserLogged(): Promise<Summary> {
    return new Summary({})
  }
}

export default Summary
