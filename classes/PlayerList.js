export class PlayerList {
  #parentID
  constructor(parentID, players){
    this.#parentID = parentID;
    this.players = players;
  }
  temp(){
    this.players.forEach(element => {
      const player = document.createElement("div");
      const id = `player-${element.ID}`;
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
      this.register(id);  
    });
  }
  register(playerID){ 
    const player = document.getElementById(playerID);
    player.addEventListener("click", function(){
      player.classList.toggle("selected");
    })
  }
}