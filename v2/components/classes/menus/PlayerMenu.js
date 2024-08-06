export class PlayerMenu{
  constructor(targetID){
    this.targetID = targetID;
  }

  temp(){
    return `
      <div class="player-controls">
        <p>view and/or confirm selections</p><p>clear selections</p>
      </div>
    `
  }
}