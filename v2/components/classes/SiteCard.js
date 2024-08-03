export class SiteCard {
  #name
  #initial
  constructor(name, initial){
    this.#name = name;
    this.#initial = initial;
  }
  temp(){
    return `
    <li class="site-options__option">
      <label for="dk">
        <input type="radio" id="dk" name="site-select" value="dk" checked></label>
        <p site-options__link>draft kings</p>
      </label>
    </li>
    `
  }
}