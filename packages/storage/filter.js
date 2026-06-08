class Filter {
  #fields = {}

  add(fields) {
    Object.assign(this.#fields, fields)
  }

  reduce(records) {
    return records.filter((record) =>
      Object.entries(this.#fields).every(
        ([field, value]) => record[field] === value,
      ),
    )
  }
}

export default Filter
