import { playerPool } from "../api/player-pool.js";
import { Player2 } from "./Player2.js";
import { GLOBALS } from "../store/globals.js";

export class Players2{
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
 
    
   
   <div id="player-count-notice--div"></div> 
   <form id="playerSelectForm" name="playerSelectForm" method="post">

    <table id="playerCountTable">
      <tr><span>QB:</span><span id="QB">${qb}</span></tr>
      <tr><span>RB:</span><span id="RB">${rb}</span></tr>
      <tr><span>WR:</span><span id="WR">${wr}</span></tr>
      <tr><span>TE:</span><span id="TE">${te}</span></tr>
      <tr><span>DST:</span><span id="DST">${dst}</span></tr>
    </table>
    <table id="playerListTable">
    <tr>
      <th class="player-list--th"></th>
      <th class="player-list--th">pos</th>
      <th class="player-list--th">name</th>
      <th class="player-list--th">team</th>
      <th class="player-list--th">game</th>
      <th class="player-list--th">f.ppg</th>
      <th class="player-list--th">salary</th>
    </tr>
    <!-- player loop -->
  </table> 
  
  
   <input type="submit" id="submit-player-select-form"> 
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
      let player  = new Player2(players[i]); 
      let template = player.temp();
      const tr = document.createElement("tr",`id=player-${i}`)
      tr.innerHTML = template;
      playerListTable.append(tr);
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
  }
}