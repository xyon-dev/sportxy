import { app } from "../../main.js";
// import { gameForm } from "../../functions/game-formxy.js";
import { getSchedule } from "../../api/getSchedule.js";
import { GameCard } from "./GameCard.js";
import { GLOBALS } from "../../store/store.js";
export class GameSchedule{
  #site
  #sport
  constructor(site, sport){
    this.#site = site;
    this.#sport = sport;
  }
  async temp (){
    const controls = document.getElementById("controls")
    let schedule = await getSchedule(this.#site, this.#sport, "dst");
    let parentID = "gameScheduleContainer"
    const content = document.getElementById("content");
    controls.innerHTML = `
    <div class="player-search-controls">
        <p class="search__label">Search by selected:</p>
        <p id="gamesFilter" class="filters__link">games</p>
        <p id="timesFilter" class="filters__link">times</p>
      </div>
    `
    content.innerHTML = `
      <div class="schedule" id="${parentID}"></div>
    `
    schedule.forEach(element => {
      let game = new GameCard(element, parentID);
      game.temp();
      game.register();
    });
  }
  register(){
    const games = document.getElementById("gamesFilter");
    const times = document.getElementById("timesFilter");
    games.addEventListener("click", function (){
      let selectedGames = document.querySelectorAll(".schedule-card__link--clicked");
      selectedGames.forEach(element => {
        GLOBALS.games.push(element.id);
      })
    })
  }
}