import { SELECTED_PLAYERS } from "../store.js";
import { SelectedPlayers } from "./SelectedPlayers.js";

export class PlayerList {
  #parentID
  constructor(parentID, players){
    this.#parentID = parentID;
    this.players = players;
  }
  temp(){
    let filteredPlayerIndex = 0;
    this.players.forEach(element => {
      const player = document.createElement("div");
      const id = `${filteredPlayerIndex}`;
      player.id = id;
      player.classList.add("player");
      player.innerHTML=`
      <div class="player__stats">
        <span class="player__data player__data--uppercase">${element.position}</span>
        <span class="player__data">${element.name}</span>
        <span class="player__data player__data--uppercase">${element.TeamAbbrev}</span>
        <span class="player__data">${element.AvgPointsPerGame}</span>
        <span class="player__data">$${element.salary}</span>
      </div>
      <div class="player__game">
        <p>${element.GameInfo}</p>
      </div>
      `;
      const parent = document.getElementById(this.#parentID);
      parent.appendChild(player);
      this.register(parseInt(player.id), element);  
      filteredPlayerIndex++;
    });
  }
  // register(playerID, element){ 
  //   const player = document.getElementById(playerID);
  //   player.addEventListener("click", function(){
  //     const index = SELECTED_PLAYERS.pool.indexOf(element.ID);
  //     player.classList.toggle("selected");
  //     if(index < 0){ 
  //       SELECTED_PLAYERS.pool.push(element.ID);
  //       console.log(SELECTED_PLAYERS.pool);
  //     }else{
  //       SELECTED_PLAYERS.pool[index] = -1;
  //       console.log(SELECTED_PLAYERS.pool)
  //     }
  //   })
  // }
  register(playerID, element){ 
    const player = document.getElementById(playerID);
    const playerIndex = playerID
    player.addEventListener("click", function(){
      const index = SELECTED_PLAYERS.pool.indexOf(playerIndex);
      player.classList.toggle("selected");
      if(index < 0){ 
        SELECTED_PLAYERS.pool.push(playerIndex);
      }else{
        SELECTED_PLAYERS.pool[index] = -1;
      }
    })
  }
}