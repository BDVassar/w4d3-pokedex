import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"

// @ts-ignore
const sandBoxAPI = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Bryan/pokemon"
})

class MyPokemonService {
  async catchPokemon() {
    let pokemon = appState.activePokemon
    const res = await sandBoxAPI.post('', pokemon)
    console.log('[CATCH POKEMON]', res.data)
    appState.myPokemon = [...appState.myPokemon, new Pokemon(res.data)]
  }
  async getMyPokemon() {
    const res = sandBoxAPI.get()
    console.log('GOT MYPOKEMON', res.data)
    appState.myPokemon = res.data

  }

}

export const myPokemonService = new MyPokemonService()