
export class Pokemon {

  constructor(data) {
    this.name = data.name || ''
    this.nickName = data.nickName || ''
    this.img = data.img ? data.img : data.sprites.front_default
    this.weight = data.weight || ''
    this.height = data.height || ''
    this.types = data.types
  }

  static GetPokeDexTemplate(pokeData) {
    return `
    <div class=" pokeDex col-12 card rounded-pill" onclick="app.pokeAPIController.setActive('${pokeData.name}')">
    <h2><img src="https://img.freepik.com/free-icon/pokeball_318-268310.jpg?w=360" height="45" alt=""
        loading="lazy">   ${pokeData.name}</h2>
          </div >
      `
  }


  get ActivePokeDexTemplate() {
    return `
    <div class="card">
          <section class="row">
            <div class="col-12 col-md-8 text-center">${this.name}</div>
            <div class="col-12 col-md 4 text-center">{this.nickName}</div>
          </section>
          <section class="row justify-content-center">
            <div class="col-12 col-md-10 text-center"><img src="${this.img}" height="400" alt=""></div>
          </section>
          <section class="row justify-content-center">
            <div class="col-12 col-md-10 text-center">Length: ${this.height}', Weight: ${this.weight}lbs</div>
          </section>
            <div class="col-12 col-md-2 text-center">${this.gettypes()}</div>
            <div class="col-12 col-md-8 text-center">Attack</div>
            <div class="col-12 col-md-2 text-center">Power</div>
          </section>
          <section class="row justify-content-evenly">
            <div class="col-12 col-md-3">weakness</div>
            <div class="col-12 col-md-3">resistance</div>
            <div class="col-12 col-md-3">retreat cost</div>
          </section>
          <section class="row justify-content-center">
          <button class="btn btn-danger col-12 col-md-3" onclick= "app.myPokemonController.catchPokemon()">Catch</button>
          </section>`


  }

  gettypes() {
    if (this.types.Length != 1) {
      for (let i = 0; i < this.types.length; i++) {
        const element = this.types[i].type.name;
        return element
      } this.types[0].type.name
    }

  }
}