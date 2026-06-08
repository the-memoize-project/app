import Mode from './mode.js'
import Query from './query.js'

class Store {
  #database
  #storeName

  constructor(database, storeName) {
    this.#database = database
    this.#storeName = storeName
  }

  add(data) {
    return new Promise((resolve, reject) => {
      const transaction = this.#database.transaction(
        this.#storeName,
        Mode.READ_WRITE,
      )
      const store = transaction.objectStore(this.#storeName)
      const created = store.add(data)

      created.onsuccess = () => {
        const found = store.get(created.result)
        found.onsuccess = () => resolve(found.result)
        found.onerror = () => reject(found.error)
      }

      created.onerror = () => reject(created.error)
    })
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.#database.transaction(
        this.#storeName,
        Mode.READ_WRITE,
      )
      const store = transaction.objectStore(this.#storeName)
      const removed = store.delete(id)

      removed.onsuccess = () => resolve()
      removed.onerror = () => reject(removed.error)
    })
  }

  get(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.#database.transaction(
        this.#storeName,
        Mode.READ_ONLY,
      )
      const store = transaction.objectStore(this.#storeName)
      const found = id ? store.get(id) : store.getAll()

      found.onsuccess = () => resolve(found.result)
      found.onerror = () => reject(found.error)
    })
  }

  update(id, data) {
    return new Promise((resolve, reject) => {
      const transaction = this.#database.transaction(
        this.#storeName,
        Mode.READ_WRITE,
      )
      const store = transaction.objectStore(this.#storeName)
      const found = store.get(id)

      found.onsuccess = () => {
        const saved = store.put({ ...found.result, ...data })
        saved.onsuccess = () => resolve()
        saved.onerror = () => reject(saved.error)
      }

      found.onerror = () => reject(found.error)
    })
  }

  where(fields) {
    return new Query(this).where(fields)
  }
}

export default Store
