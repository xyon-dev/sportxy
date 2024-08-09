import { GLOBALS, SAVED_ROSTERS } from "../store/globals.js";
// Roster CLASS
export class Roster {
  #id;
  #roster;
  constructor(id, roster){
    this.#roster=roster;
    this.#id = id;
    this.index = id;
  }
  salary = () => {
    let salary= 0;
    for(const player in this.#roster){
     
      salary += Number(this.#roster[player]["salary"]);
    };
   return salary;
  }
  test = () => { console.log(this.#roster.dst)};
  temp = (elemID) => { 
    const container = document.getElementById("rosterTable");
    let playerTemp = ``;
    let avgPoint = 0;
    for(const position in this.#roster){
      if(position !== "salary"){
        let player = this.#roster[position];
        const temp= `<tr>
        <td name="position" style="text-transform: uppercase;">${position}</td>
        <td name="name">${player.name}</td>
        <td name="TeamAbbrev">${player.TeamAbbrev}</td>
        <td name="GameInfo">${player.GameInfo}</td>
        <td name="fppg">${player.AvgPointsPerGame}</td>
        <td name="salary">${player.salary}</td>
        </tr>
        `
        playerTemp += temp;
        avgPoint += Number(player.AvgPointsPerGame);
      }
    }
    const rosterSection = document.createElement("section");
    rosterSection.style.borderBottom = "1px solid gray";
    rosterSection.style.marginBottom = "10px";
    rosterSection.innerHTML = `<table id="${this.#id}" style="width: 900px; margin-bottom: 20px; font-family: system-ui;">
      <tr style="text-transform: capitalize;"> 
        <th>pos</th>
        <th>name</th>
        <th>team</th>
        <th>game</th>
        <th>fppg</th>
        <th>salary</th>
      </tr>
      <tr style="background-color: alice-blue">
        <td>${this.#id}</td>
        <td><button id="submit-${this.#id}" style="
          font-size: 11px;
          padding: 5px;
          background: white;
          border: 1px solid steelblue;
          border-radius: 12px;
          width: 10em;
          text-transform: capitalize;
          font-weight: 600;
          color: steelblue;"
          >add to queue
          </button>
        </td>
        <td></td>
        <td></td>
        <td>Avg: ${avgPoint}</td>
        <td><h5 style="color: #3aa93a;">$${this.#roster["salary"]}</h5></td>
      </tr>
      ${playerTemp}
      </table>`;
     container.appendChild(rosterSection);
  }
  register = (roster) => {
    let savedIndex = -1;
    const itemsInCart = document.getElementById("itemsInCart");

    const el = document.getElementById(`submit-${this.#id}`);
      el.addEventListener('click', function (e){
      e.preventDefault(); 
      if(savedIndex < 0){
        SAVED_ROSTERS.rosters.push(roster);
        savedIndex = SAVED_ROSTERS.rosters.length-1;
        GLOBALS.cart++
        el.innerHTML = "remove"
      }else{
        SAVED_ROSTERS.rosters[savedIndex] = -1;
        savedIndex = SAVED_ROSTERS.rosters[savedIndex];
        GLOBALS.cart--
        el.innerHTML = "add to queue"
      }
      itemsInCart.innerHTML = `${GLOBALS.cart}`;
      //console.log(SAVED_ROSTERS); // api: send comment to db, on verification, append to comments(first child)
    }); 
  }
}