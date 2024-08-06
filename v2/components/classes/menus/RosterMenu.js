export class RosterMenu{
  constructor(targetID){
    this.targetID = targetID;
  }

  temp(){
    return `
      <div class="roster-controls">
        <button class="roster-controls__btn">
          download rosters
        </button class="roster-controls__btn">
      </div>
    `
  }
}