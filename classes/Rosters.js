export class Roster{
  #roster
  #index
  #parentID
  constructor(index, parentID, roster){
    this.#roster = roster;
    this.#index = index;
    this.#parentID = parentID;
  }
  temp(){
    const parent = document.getElementById(this.#parentID);
    const roster = document.createElement("div");
    roster.id = `roster${this.#index}`;
    roster.classList.add("roster");
    roster.innerHTML = `
      <div class="roster-heading">
        <p class="roster-id">roster-${this.#index}</p>       
        <p id="save${this.#index}" class="roster__save-text">save</p>
      </div>     
    `;
    parent.appendChild(roster);

    // Append players to roster
    const ParentRoster = document.getElementById(`roster${this.#index}`);
    console.log(this.#roster)
    for(const key in this.#roster){ 
      if(key !== "salary"){
      const RosterPlayer = document.createElement("div");
      RosterPlayer.classList.add("roster__player");
      RosterPlayer.innerHTML=`
        <div class="roster-player__items">
          <span class="player__data player__data--uppercase">${this.#roster[key]["position"]}</span>
          <span class="player__data">${this.#roster[key]["name"]}</span>
          <span class="player__data player__data--uppercase">${this.#roster[key]["TeamAbbrev"]}</span>
          <span class="player__data">${this.#roster[key]["AvgPointsPerGame"]}</span>
          <span class="player__data">$${this.#roster[key]["salary"]}</span>
        </div>        
      `
      ParentRoster.appendChild(RosterPlayer);
      };
    };
    this.register();
  }
  register(){
    const save = document.getElementById(`save${this.#index}`);
    save.addEventListener("click", function(){
      save.classList.toggle("selected-save");
    })
  }
}
{/* <div class="roster-heading">
<p class="roster-id">${roster}-${index}</p>
<label for="${roster}-${index}" class="roster__save">
  <input id="${roster}-${index}" type="checkbox" class="roster__save-input" name="${roster}-${index}" value="${roster}-${index}">
  <p class="roster__save-text">save</p>
</label>
</div>   */}