import { GLOBALS } from "../store/globals.js";

export class Player2 {
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
    return `
      <td class="player-list--input player-list--td">
        <label for="${this.#name}">
          <input type="checkbox" id="player-${this.#id}" name="${this.#name}" value="${this.#id}">
        </label>
      </td>
      <td class="player-list--td">${this.#position}</td>
      <td class="player-list--td">${this.#name}</td>
      <td class="player-list--td">${this.#TeamAbbrev}</td>
      <td class="player-list--td">${gameInfo[0]}</td>
      <td class="player-list--td">${this.#AvgPointsPerGame}</td>
      <td class="player-list--td">${this.#salary}</td>
    `;
  }
  register = () => {
    const pos = this.#position;
    const el = document.getElementById(`player-${this.#id}`);
      el.addEventListener('click', function (e){ 
      const posUpdate = document.getElementById(pos)// api: send comment to db, on verification, append to comments(first child)
      // if checked add 1 else sub 1
      el.checked ? GLOBALS.playerCount[pos]++ : GLOBALS.playerCount[pos]--;
      posUpdate.innerHTML = `${GLOBALS.playerCount[pos]}`;
    }); 
  }
}