import { QUERY } from "./store.js";
// import { SearchSubmit } from "./classes/SearchSubmit.js";
import { getSchedule } from "./api/getSchedule.js";
import { playerPool } from "./api/player-pool.js";
import { GameSchedule } from "./classes/GameSchedule.js";
import { GAMES, FILTERED_PLAYERS } from "./store.js";
import { removeDuplicateGames } from "./functions/removeDuplicateGames.js"
import { PlayerList } from "./classes/PlayerList.js";
export class App{
  // app element ID: from main
  #id 
  constructor(id){
    this.#id = id;
  }
  start(){
    console.log("app started");
  }
  updateSearch(){
    const submit = document.getElementById("selection-memo")
    submit.innerHTML = 
    `
    Would you like to select players from ${QUERY[QUERY.site]}'s, ${QUERY.sport} slate? If not, select a different site and sport.
    `
  }
  async PlayerSelect(games){ 
    const controls = document.getElementById("controls");
    controls.innerHTML = ` 
      <div class="player-controls">
        <p>view and/or confirm selections</p><p>clear selections</p>
      </div>`;
    const pool = await playerPool(QUERY.site, games, "f");
    FILTERED_PLAYERS.pool = pool;
    const app = document.getElementById("App");
    app.innerHTML = `
    <div class="players">
     <div id="PlayerList" class="player-list">
      <div class="player__stats player-list__labels">
          <span class="player__data">position</span>
          <span class="player__data">name</span>
          <span class="player__data">team</span>
          <span class="player__data">fppg</span>
          <span class="player__data">salary</span>
       </div>
     </div>
    </div>
    `
    // create player list
    let playerList = new PlayerList("PlayerList", FILTERED_PLAYERS.pool);
    playerList.temp();
  }
  async GameSelect(query){ 
    const app = document.getElementById("App");
    const schedule = await getSchedule(query, "dst");
    const FilteredSchedule =  removeDuplicateGames(schedule);
    const Games = new GameSchedule(QUERY, FilteredSchedule);
    Games.temp();
    Games.register();
    const search = document.getElementById("btn-search-players");
    const players = this.PlayerSelect
    search.addEventListener("click", function (){
      let selectedGames = document.querySelectorAll(".schedule-card__link--clicked");
      selectedGames.forEach(element => {
        GAMES.list.push(element.id);
      })
      players(GAMES.list);
    })
  }
}