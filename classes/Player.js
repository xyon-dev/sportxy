export class Player {
  #AvgPointsPerGame;
  #GameInfo;
  #TeamAbbrev;
  #id;
  #name;
  #position;
  #salary;
  constructor(player){
    this.#AvgPointsPerGame = player.AvgPointsPerGame;
    this.#GameInfo = player.GameInfo
    this.#TeamAbbrev = player.TeamAbbrev;
    this.#id = player.id;
    this.#name = player.name;
    this.#position = player.position;
    this.#salary = player.salary;
  }
  temp(){
    //
    return `<ul id="player-${this.#id}">
    <li>${this.#position }</li>
    <li>${this.#name }</li>
    <li>${this.#TeamAbbrev }</li>
    <li>${this.#GameInfo }</li>
    <li>${this.#AvgPointsPerGame }</li>
    <li>${this.#salary }</li>
    </ul>
    `;
  }
  register = () => {
    const el = document.getElementById(`submit-${this.#id}`);
      el.addEventListener('click', function (e){
      e.preventDefault();
      console.log(`ready to add to short list`); // api: send comment to db, on verification, append to comments(first child)
    }); 
  }
}