import { MyPokemonController } from "./Controllers/myPokemonController.js";
import { PokeAPIController } from "./Controllers/PokeAPIController.js";


class App {

  pokeAPIController = new PokeAPIController()

  myPokemonController = new MyPokemonController()
}

window["app"] = new App();
