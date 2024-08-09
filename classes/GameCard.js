
export class GameCard{
  #ID
  #position
  #name
  #GameInfo
  #parentID
  constructor(game, parentID){
    this.#ID = game.ID;
    this.#GameInfo = game.GameInfo;
    this.#name = game.name;
    this.#position = game.position;
    this.#parentID = parentID;
    this.gmInfoArray = game.GameInfo.split(" ");
    this.gmInfo = this.gmInfoArray[0]; // ie: BUF@AZ
    this.atSymbol = this.gmInfo.indexOf("@");
    this.visitor = this.gmInfo.substr(0, this.atSymbol); 
    this.home = this.gmInfo.substr(this.atSymbol+1);
    this.time = this.gmInfoArray[2];
  }
    
  temp(){
    const container = document.getElementById(this.#parentID);
    const ScheduleCard = document.createElement("div");
    ScheduleCard.classList.add("schedule-card");
    ScheduleCard.innerHTML = `
      <div class="schedule-card__game-info">
        <section class="schedule-card__teams">
          <p id="${this.home}" class="schedule-card__link">${this.home}</p>
          <p>V</p>
          <p id="${this.visitor}" class="schedule-card__link">${this.visitor}</p>
        </section>
        <p class="schedule-card__time">${this.time}</p>
      </div>
    `;
    container.appendChild(ScheduleCard);
  }
  register(){
    const homeLink = document.getElementById(this.home);
    const visitorLink = document.getElementById(this.visitor);
    homeLink.addEventListener("click", function(){
      this.classList.toggle("schedule-card__link--clicked")
    })
    visitorLink.addEventListener("click", function(){
      this.classList.toggle("schedule-card__link--clicked")
    })
  }
}