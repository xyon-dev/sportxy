import { QUERY } from "../../store/store.js";
import { app } from "../../main.js";

export class SportCard {
  #sport
  constructor(sport){
    // object with keys: title, status 
    // status == selected | available | disabled
    this.#sport = sport;
  }
  temp(){
    const statusClassList = {
      base: `sport-options__option`,
      disabled: `sport-options__option--disabled`,
      primary:  `sport-options__option--selected`,

    }
    // create element "p"
    const p = document.createElement("p");
    // add ID
    p.setAttribute("id", `${this.#sport.title}-select`);
    // add Classes
    p.classList.add(statusClassList.base)
    if(this.#sport.status == "primary"){ 
      p.classList.add(statusClassList.primary);
    }else if(this.#sport.status == "disabled"){
      p.classList.add(statusClassList.disabled);
    }
    // insert html: "nfl, nba, etc"
    p.innerHTML = `${this.#sport.title}`;
    // return p to site header function to be 
    // appended to site header
    return p
  }
  register(id){
    const p = document.getElementById(id);
    const ID = this.#sport.title;
    p.addEventListener("click", function (e) {
      const selected = document.querySelector(".sport-options__option--selected");
      selected.classList.toggle("sport-options__option--selected");
      p.classList.toggle("sport-options__option--selected");
      QUERY.sport = ID;
      app.updateSearch();
    })
  }
}  