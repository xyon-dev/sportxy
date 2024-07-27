import { SITES } from "../store/globals.js";
export class SiteCards {
  #sites;
  constructor(){
    this.#sites = SITES;
  }
  temp(){
    let template = ``
    for(let i=0; i<this.#sites.length; i++){
      template += `
      <label for="${this.#sites[i]["initial"]}">${this.#sites[i]["name"]}</label>
      <input id="select-site-${this.#sites[i]["initial"]}" type="radio" name="site-select" value="${this.#sites[i]["initial"]}" >
      `;
    }
    return template;
  }
}