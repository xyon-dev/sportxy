export class Card {
  #name;
  #initial;
  constructor(name, initial){
    this.#name = name;
    this.#initial = initial;
  }
  temp(){
    return `
      <p>${this.#name}</p>
      <label for="${this.#initial}">
      <input id="select-site-${this.#initial}" name="site-select" type="radio">`;
  }
}