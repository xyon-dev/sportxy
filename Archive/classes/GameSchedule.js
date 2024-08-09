import { App } from "../main.js";
import { gameForm } from "../functions/game-formxy.js";
import { getSchedule } from "../api/getSchedule.js";
import { GLOBALS } from "../store/globals.js";

export class GameSchedule{
  #site
  #sport
  constructor(site, sport){
    this.#site = site;
    this.#sport = sport;
  }
  async temp (){
    let template = `game schedule`;
    // let schedule = await getSchedule(this.#site, this.#sport, "dst");
    let form = gameForm(schedule);
      template = form;
    let target = document.getElementById("App");
      target.innerHTML = template;
  }
  register(){
    const GameForm = document.getElementById("gameOptions"); 
    GameForm.addEventListener('submit', function (e){
      e.preventDefault();
      const submit = document.getElementById("game-submit");
      const formData = new FormData(GameForm, submit);
      let games = [];
      for(const key of formData.keys()){
        games.push(key);
      }
      App.PlayerSelect(games);
    });
  }
}