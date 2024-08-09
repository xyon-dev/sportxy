import { GLOBALS } from "../store/globals.js";

export class Player {
  #player;
  #AvgPointsPerGame;
  #GameInfo;
  #TeamAbbrev;
  #id;
  #name;
  #position;
  #salary;
  constructor(player){
    this.#player = player;
    this.#AvgPointsPerGame = this.#player.AvgPointsPerGame;
    this.#GameInfo = this.#player.GameInfo
    this.#TeamAbbrev = this.#player.TeamAbbrev;
    this.#id = this.#player.id;
    this.#name = this.#player.name;
    this.#position = this.#player.position;
    this.#salary = this.#player.salary;
  }
  temp(){
    // let playerName = player.name.replace(" ","-");
    let gameInfo = this.#GameInfo.split(" ");
    return `<ul id="player-${this.#id}--ul" class="player-list--ul">
    <li class="player-list--input">
      <label for="${this.#name}">
        <input type="checkbox" id="player-${this.#id}" name="${this.#name}" value="${this.#id}">
      </label>
    </li>
    <li class="player-list--li">${this.#position }</li>
    <li class="player-list--li">${this.#name }</li>
    <li class="player-list--li">${this.#TeamAbbrev }</li>
    <li class="player-list--li">${gameInfo[0] }</li>
    <li class="player-list--li">${this.#AvgPointsPerGame }</li>
    <li class="player-list--li">${this.#salary }</li>
    </ul>
    `;
  }
  register = () => {
    const pos = this.#position;
    const el = document.getElementById(`player-${this.#id}`);
      el.addEventListener('click', function (e){ 
      const posUpdate = document.getElementById(pos)// api: send comment to db, on verification, append to comments(first child)
      // if checked add 1 else sub 1
      el.checked ? GLOBALS.playerCount[pos]++ : GLOBALS.playerCount[pos]--;
      console.log(pos,":",GLOBALS.playerCount[pos]);
      posUpdate.innerHTML = `${pos}: ${GLOBALS.playerCount[pos]}`;
    }); 
  }
}