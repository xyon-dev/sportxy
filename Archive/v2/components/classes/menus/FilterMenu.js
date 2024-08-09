import { GameFilter } from "../filters/GameFilter.js";
import { TimeFilter } from "../filters/TimeFilter.js";

export class FilterMenu{
  constructor(targetID){
    this.targetID = targetID;
  }
  classList = {
    base: 'filters__link',
    active: 'active-filter'
  }
  Games = new GameFilter([this.classList.base, this.classList.active]);
  Times = new TimeFilter([this.classList.base])
  temp(){
    return `
    <div class="filter-controls">
        <p class="filters__label">filters:</p>
        ${Games}
        ${Times}
      </div>
    `
  }
}
// <p id="game-filter" class="filters__link active-filter">games</p>

//         <p id="time-filter" class="filters__link">times</p>