import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"

// @ts-ignore
const pokeAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

class PokeAPIService {
  async setActive(name) {
    const res = await pokeAPI.get(name)
    console.log('[SET ACTIVE]', res.data)
    appState.activepokeDex = new Pokemon(res.data)
    appState.activePokemon = new Pokemon(res.data)

  }
  async getPokeDex() {
    const res = await pokeAPI.get()
    console.log('[GOT POKEDEX]', res.data.results)
    appState.pokeDex = res.data.results
  }

}

export const pokeAPIService = new PokeAPIService()