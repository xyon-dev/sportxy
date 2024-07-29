import { playerPool } from "../api/player-pool.js";
import { Player } from "./Player.js";
import { templatePlayerList } from "../templates/nfl-players/playerListPositions.js";
import { GLOBALS } from "../store/globals.js";

export class Players{
  #teams
  constructor(teams){
    this.#teams = teams;
  }

  async temp(){
     /***
     *  send data to PLayer class
     * add event lister to each
     * make side bar component
     * */ 
    const players = await playerPool(GLOBALS.site, this.#teams, "f"); 
    let template = ` 
    <h2 class="player-list-title--h2">Football</h2>
    <ul class="player-count--ul">
    <li class="player-count--li" id="QB">QB: ${qb}</li>
    <li class="player-count--li" id="RB">RB: ${rb}</li>
    <li class="player-count--li" id="WR">WR: ${wr}</li>
    <li class="player-count--li" id="TE">TE: ${te}</li>
    <li class="player-count--li" id="DST">DST: ${dst}</li>
   </ul>
   <div id="player-count-notice--div"></div> 
   <form id="playerSelectForm" name="playerSelectForm" method="post">
   <div id="player-list">
    <ul class="player-list--ul">
      <li class"player-list--input">  </li>
      <li class"player-list--input">position</li>
      <li class"player-list--input">name</li>
      <li class"player-list--input">team</li>
      <li class"player-list--input">game</li>
      <li class"player-list--input">ppg</li>
      <li class"player-list--input">salary</li>
    </ul>
   </div>
   <input type="submit" id="submit-player-select-form" name="player-select" value="Submit"> 
   <form>
    `;
    // inset innerHTML
    const element = document.getElementById("App");
    element.innerHTML = template;

    /***
     * append players
     */
    const playerList = document.getElementById("player-list");
    for(let i=0; i<players.length; i++){
      let player  = new Player(players[i]); 
      let template = player.temp();
      const div = document.createElement("div",`id=player-${i}`)
      div.innerHTML = template;
      playerList.append(div);
      player.register();
    }
  }
  register(){
    const Form = document.getElementById("playerSelectForm");
    Form.addEventListener('submit', function (e){
      e.preventDefault();
      const Submitter = document.getElementById("submit-player-select-form");
      const form = new FormData(Form, Submitter)
      for(const [key, value] of form.entries()){
        console.log(key, value);
      }
    })
  }n
}