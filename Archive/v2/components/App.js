 import { SitesHeader, sitesHeaderContent } from "./functions/sites-header.js";
import { SportsHeader, sportsHeaderContent } from "./functions/sports-header.js";
import { SearchSubmit} from "./SearchSubmit.js";
import { QUERY, SITES } from "../store/store.js";
import { GameSchedule } from "./classes/GameSchedule.js";
import { playerPool } from "../api/player-pool.js";

export class App{
  #id
  constructor(id){
    this.#id = id;
  }

  start(){
    const sites = document.getElementById("sites");
    const sports = document.getElementById("sports");
    const controls = document.getElementById("controls");
    const content = document.getElementById("content");
    sites.innerHTML = SitesHeader;
    sports.innerHTML = SportsHeader;
    sitesHeaderContent();
    sportsHeaderContent();

    const submit = new SearchSubmit("roster-options", QUERY);
    content.innerHTML = submit.temp();
    submit.register();
  }
  updateSearch(){
    const submit = document.getElementById("selection-memo")
    submit.innerHTML = 
    `
    Would you like to select players from ${QUERY[QUERY.site]}'s, ${QUERY.sport} slate? If not, select a different site and sport.
    `
  }
  async GameSelect(data){ 
    const content = document.getElementById("content");
    let schedule = new GameSchedule(data.site, data.sport)
    await schedule.temp();
    schedule.register();
  }
  async PlayerSelect(games){ 
    let players = await playerPool(QUERY.site, games, "f");
    console.log(players);
  }
  register(){
    
  }
}