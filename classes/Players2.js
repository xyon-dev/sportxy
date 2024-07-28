import { playerPool } from "../api/player-pool.js";
import { Player2 } from "./Player2.js";
import { GLOBALS } from "../store/globals.js";
import { App } from "../main.js";
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
    GLOBALS.players = players;
    let template = ` 
    <h2 class="player-list-title--h2" style="text-align: center;">NFL: Draft Kings</h2>
   <div id="player-count-notice--div"></div> 
   <form id="playerSelectForm" name="playerSelectForm" method="post">

    <aside id="playerCount" style="
    display: flex;
    width: 500px;
    justify-content: space-evenly;
    margin: 0 auto;
    font-size: 25px;
    ">
      <section style="display:flex;width:50px;justify-content:space-around;"><div>QB:</div><div id="QB">${qb}</div></section>
      <section style="display:flex;width:50px;justify-content:space-around;"><div>RB:</div><div id="RB">${rb}</div></section>
      <section style="display:flex;width:50px;justify-content:space-around;"><div>WR:</div><div id="WR">${wr}</div></section>
      <section style="display:flex;width:50px;justify-content:space-around;"><div>TE:</div><div id="TE">${te}</div></section>
      <section style="display:flex;width:50px;justify-content:space-around;"><div>DST:</div><div id="DST">${dst}</div></section>
    </aside>
    <aside style="
      font-size: 12px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <p>pick at least: 1 QB, 2 RB, 3 WR, 1 TE, 1 DST, a RB/WR/TE for the Flex postion, and 1 other player from any position:</p>
      <div id="player-count-msg" style="text-align: center"></div>
    </aside>
    
    <table id="playerListTable" style="
      width: 900px;
      text-align: left;
      max-width: 900px;
      min-width: 500px;
      margin: 20px auto;
    ">
    <tr>
      <th class="player-list--th" style="width: 20px;"></th>
      <th class="player-list--th">pos</th>
      <th class="player-list--th">name</th>
      <th class="player-list--th">team</th>
      <th class="player-list--th">game</th>
      <th class="player-list--th">f.ppg</th>
      <th class="player-list--th">salary</th>
    </tr>
    <!-- player loop -->
  </table> 
  
  <div style="margin:0 auto; width:5em">
   <input type="submit" id="submit-player-select-form" class="site-select-form-submit"> 
  <div>
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
      let player  = new Player2(players[i], i); 
      let template = player.temp();
      const tr = document.createElement("tr",`id=player-${i}`)
      tr.innerHTML = template;
      playerListTable.append(tr);
      player.register();
    }
  }
  register(){


    /**
     * SUBMIT EVENT
     */
    const Form = document.getElementById("playerSelectForm");
    Form.addEventListener('submit', function (e){
      e.preventDefault();
      const Submitter = document.getElementById("submit-player-select-form");
      const form = new FormData(Form, Submitter);
      let selectedPlayers = [];
      if(GLOBALS.playerCount["QB"] < 1 || 
        GLOBALS.playerCount["RB"] < 2 ||
        GLOBALS.playerCount["WR"] <3 ||
        GLOBALS.playerCount["TE"] < 1 ||
        GLOBALS.playerCount["DST"] < 1 ||
        GLOBALS.playerCount["RB"] + GLOBALS.playerCount["WR"] + GLOBALS.playerCount["TE"] < 7
      ){
        const errorMSG = document.getElementById("player-count-msg");
        errorMSG.innerHTML = `<span style="color:red;">*not enough players selected</span>`;
        const closeMSG = setTimeout(function (){
          errorMSG.innerHTML = "";
        }, 5000)
      }else{
        for(const value of form.values()){
          selectedPlayers.push(value);
        }
        App.RosterSelect(selectedPlayers);
      }
    })
  }
}