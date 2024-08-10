import { SELECTED_PLAYERS } from "../store.js"
import { FILTERED_PLAYERS } from "../store.js";

export class SelectedPlayers{
  #parentID
  #element
  constructor(parentID, element){
    this.#parentID = parentID;
    this.#element = element;
  }
  temp(){
    const parent = document.getElementById(`${this.#parentID}`);
    // SELECTED_PLAYERS.pool.forEach(element => {
      if(this.#element !== -1){
        const player = FILTERED_PLAYERS.pool[this.#element];
        const li = document.createElement("li");
        li.classList.add("player-pool__item");
        li.innerHTML = `
          <p class="player-pool__position">${player.position}</p>
          <p class="player-pool__name">${player.name}</p>
          <p class="player-pool__fppg">${player.AvgPointsPerGame}</p>
          <p class="player-pool__salary">$${player.salary}</p>
        `;
        parent.appendChild(li);
      }
    // });
  }
  register(id){
  }
}



 