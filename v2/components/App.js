import { SitesHeader, sitesHeaderContent } from "./functions/sites-header.js";
import { SportsHeader, sportsHeaderContent } from "./functions/sports-header.js";
export class App{
  #id
  constructor(id){
    this.#id = id;
  }

  start(){
    const sites = document.getElementById("sites");
    const sports = document.getElementById("sports");
    sites.innerHTML = SportsHeader;
    sports.innerHTML = SitesHeader;

  }
  register(){
    
  }
}