
import { Pokemon } from "./Models/Pokemon.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {


  pokeDex = []
  /** @type {import( './Models/Pokemon').Pokemon} */
  activepokeDex = null

  /** @type {import( './Models/Pokemon').Pokemon[]|null} */
  myPokemon = []

  /** @type {import( './Models/Pokemon').Pokemon} */
  activePokemon = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
