import { app } from "../../main.js";
import { gameForm } from "../../functions/game-formxy.js";
import { getSchedule } from "../../api/getSchedule.js";
import { GameCard } from "./GameCard.js";
export class GameSchedule{
  #site
  #sport
  constructor(site, sport){
    this.#site = site;
    this.#sport = sport;
  }
  async temp (){
    let schedule = await getSchedule(this.#site, this.#sport, "dst");
    let parentID = "gameScheduleContainer"
    const content = document.getElementById("content");
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
    const GameForm = document.getElementById("gameOptions"); 
    // GameForm.addEventListener('submit', function (e){
    //   e.preventDefault();
    //   const submit = document.getElementById("game-submit");
    //   const formData = new FormData(GameForm, submit);
    //   let games = [];
    //   for(const key of formData.keys()){
    //     games.push(key);
    //   }
    //   app.PlayerSelect(games);
    // });
  }
}