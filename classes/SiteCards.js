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
      <input id="select-site-${this.#sites[i]["initial"]}" name="site-select" type="radio" value="${this.#sites[i]["name"]}">
      `;
    }
    return template;
  }
}