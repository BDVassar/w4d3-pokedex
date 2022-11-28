import { myPokemonService } from "../Services/myPokemonService.js";
import { Pop } from "../Utils/Pop.js";

export class MyPokemonController {

  constructor() {

  }

  async getMyPokemon() {
    try {
      await myPokemonService.getMyPokemon()
    } catch (error) {
      Pop.error(error)
      console.log(error.message)
    }
  }

  async catchPokemon() {
    try {
      await myPokemonService.catchPokemon()
    } catch (error) {
      Pop.error(error)
      console.log(error.message)
    }
  }
}