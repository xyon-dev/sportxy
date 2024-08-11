import { QUERY, SELECTED_PLAYERS, FINAL_ROSTERS } from "./store.js";
// import { SearchSubmit } from "./classes/SearchSubmit.js";
import { getSchedule } from "./api/getSchedule.js";
import { playerPool } from "./api/player-pool.js";
import { GameSchedule } from "./classes/GameSchedule.js";
import { GAMES, FILTERED_PLAYERS } from "./store.js";
import { removeDuplicateGames } from "./functions/removeDuplicateGames.js"
import { PlayerList } from "./classes/PlayerList.js";
import { SelectedPlayers } from "./classes/SelectedPlayers.js";
import { buildFilteredRosters } from "./functions/filterPlayerPool.js";
import { Roster } from "./classes/Rosters.js";
import { csvStringsArray } from "./functions/csvStringsArray.js";
import { Filexy } from "../filexy-js/filexy.csv.js";
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
  getRosterList(rosters){
    const app = document.getElementById("App");
    const controls = document.getElementById("controls");
    controls.innerHTML = `
    <div class="roster-controls">
      <button class="roster-controls__btn">download rosters</button class="roster-controls__btn">
    </div>    
    `;
    app.innerHTML = `>
      <div id="Rosters" class="rosters">
      </div>        
    `;
    for(let i=0; i<rosters.length; i++){
      let newRoster = new Roster(i, "Rosters", rosters); 
      newRoster.temp();
      
    }
  }
  async PlayerSelect(games){ 
    const controls = document.getElementById("controls");
    controls.innerHTML = ` 
      <div class="player-controls">
        <button id="confirm-selections" class="player-control">view and/or confirm selections</button>
        <button id="clear-players" class="player-control">clear selections</button>
      </div>`;
    const pool = await playerPool(QUERY.site, games, "f");
    FILTERED_PLAYERS.pool = pool;
    const app = document.getElementById("App");
    app.innerHTML = `
    <div class="players">
      <div id="player-pool" class="player-pool hide">
        <div class="close-icon"><p id="close" class="close-icon__text">back</p></div>
          <ul id="player-pool-list" class="player-pool__list">
          </ul>
        <div class="btn-container">
            <button id="get-rosters" class="btn-get">get rosters</button>
        </div>
      </div> 
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
    `;
    // create player list
    let playerList = new PlayerList("PlayerList", FILTERED_PLAYERS.pool);
    playerList.temp();
    // confirm selections event
    const confirm = document.getElementById("confirm-selections");
    confirm.addEventListener("click", function(){
      const selected = document.getElementById("player-pool");
      if(selected.classList.contains("hide")){
        SELECTED_PLAYERS.pool.forEach(element => {
          const newElem = new SelectedPlayers("player-pool-list", element);
          newElem.temp();
         });  
        selected.classList.toggle("hide");
      }else{
        selected.classList.toggle("hide");
        const list = document.getElementById("player-pool-list");
        list.innerHTML=  ``;
      }
    });
    // close button event
    const close = document.getElementById("close")
    close.addEventListener("click", function (){
      const selected = document.getElementById("player-pool"); 
      selected.classList.toggle("hide");
      const list = document.getElementById("player-pool-list");
      list.innerHTML=``;
    })
    // clear selections
    const clear = document.getElementById("clear-players");
    clear.addEventListener("click", function(){
      const allSelected = document.querySelectorAll(".selected");
      allSelected.forEach(element => {
        element.classList.toggle("selected");
      })
      SELECTED_PLAYERS.pool = [];
    })
    // get rosters btn
    const getRosters = document.getElementById("get-rosters");
    getRosters.addEventListener("click", function(){
      let RosterPool = []; 
      SELECTED_PLAYERS.pool.forEach(player => {
        if(player !== -1){
          RosterPool.push(FILTERED_PLAYERS.pool[player]);
        }
      })
      const rosters = buildFilteredRosters(RosterPool, true);
      SELECTED_PLAYERS.rosters = rosters;
      // ADD ROSTERS
      const app = document.getElementById("App");
      const controls = document.getElementById("controls");
      controls.innerHTML = `
      <div class="roster-controls">
        <button class="roster-controls__btn">download rosters</button class="roster-controls__btn">
      </div>    
      `;
      app.innerHTML = `
        <div id="Rosters" class="rosters">
        </div>        
      `;
      for(let i=0; i<rosters.length; i++){
        let newRoster = new Roster(i, "Rosters", rosters[i]); 
        newRoster.temp();
      }
      // add controls event
      let FinalRosters = []
      let RosterIDs = []
      controls.addEventListener("click", function(){
        const SelectedRosters = document.querySelectorAll(".selected-save");
        for(let i=0; i<SelectedRosters.length; i++){
         RosterIDs.push(Number(SelectedRosters[i]["id"])); 
        }
        for(let i=0; i<RosterIDs.length; i++){
          FinalRosters.push(SELECTED_PLAYERS.rosters[RosterIDs[i]]);
        }
        let str = csvStringsArray(FinalRosters, "qb");
        let filexy = new Filexy(null, null, str);
        let url = filexy.csv();
        let date = Date.now()
        controls.innerHTML = ``;
        app.innerHTML=`
        <a class="download-button" href="${url}" download="sportxy${date}.csv">download file</a>
        `
      })

    })
   
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