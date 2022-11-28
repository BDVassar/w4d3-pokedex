import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeAPIService } from "../Services/PokeAPIService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokeDex() {
  let pokeData = appState.pokeDex
  let template = ''
  pokeData.forEach(p => template += Pokemon.GetPokeDexTemplate(p))
  setHTML('poke-api', template)
}

function _drawActivePokemon() {
  let activePokemon = appState.activepokeDex
  setHTML('active-pokemon', activePokemon.ActivePokeDexTemplate)

}


export class PokeAPIController {

  constructor() {
    appState.on('pokeDex', _drawPokeDex)
    appState.on('activepokeDex', _drawActivePokemon)
    this.getPokeDex()
  }

  async getPokeDex() {
    try {
      await pokeAPIService.getPokeDex()
    } catch (error) {
      Pop.error(error)
      console.error(error.message)
    }
  }

  async setActive(name) {
    try {
      await pokeAPIService.setActive(name)
    } catch (error) {
      Pop.error(error)
      console.error(error.message)
    }
  }
}