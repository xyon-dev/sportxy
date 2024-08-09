// import { App } from "../Main.js"
// import { gameForm } from "../../functions/game-formxy.js";
// import { getSchedule } from "../../api/getSchedule.js";
import { GameCard } from "./GameCard.js";
import { GAMES } from "../store.js";
export class GameSchedule{
  #site
  #sport
  constructor(query, schedule){
    this.#site = query.site;
    this.#sport = query.sport;
    this.schedule = schedule;
  }
  async temp (){
    const controls = document.getElementById("controls")
    // let schedule = await getSchedule(this.#site, this.#sport, "dst");
    let parentID = "gameScheduleContainer"
    const app = document.getElementById("App");
    controls.innerHTML = `
    <div class="player-search-controls">
      <button id="btn-search-players" class="controls__btn">get player pool</button>
    </div>
    `
    app.innerHTML = `
      <div class="schedule" id="${parentID}"></div>
    `
    this.schedule.forEach(element => {
      let game = new GameCard(element, parentID);
      game.temp();
      game.register();
    });
  }
  register(){
    // const games = document.getElementById("gamesFilter");
    // const times = document.getElementById("timesFilter");
    // const search = document.getElementById("btn-search-players");
    // search.addEventListener("click", function (){
    //   let selectedGames = document.querySelectorAll(".schedule-card__link--clicked");
    //   selectedGames.forEach(element => {
    //     GAMES.list.push(element.id);
    //   })
    //   App.PlayerSelect(GAMES.list);
    // })
  }
}
/*
<div class="filters">
        <p class="search__label">Search by selected:</p>
        <p id="gamesFilter" class="filters__link">games</p>
        <p id="timesFilter" class="filters__link">times</p>
      </div>
*/