import { Player } from "./Player.js";
// Roster CLASS
export class Roster {
  #id;
  // #q;
  // #r1;
  // #r2;
  // #w1;
  // #w2;
  // #w3;
  // #t;
  // #f;
  // #d;
  #roster;
  // #sal;
  constructor(id, roster){
    this.#roster=roster;
    this.#id = id;
    // this.#q = roster.q;
    // this.#r1 = roster.r1;
    // this.#r2 = roster.r2
    // this.#w1 = roster.w1;
    // this.#w2 = roster.w2;
    // this.#w3 = roster.w3;
    // this.#t = roster.t;
    // this.#f = roster.f;
    // this.#d = roster.d;
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
    const table = document.getElementById("rosterTable");
    for(const position in this.#roster){
      if(position !== "salary"){
        let player = this.#roster[position];
        const temp= `
        <td name="position">${player.position}</td>
        <td name="name">${player.name}</td>
        <td name="TeamAbbrev">${player.TeamAbbrev}</td>
        <td name="GameInfo">${player.GameInfo}</td>
        <td name="fppg">${player.AvgPointsPerGame}</td>
        <td name="salary">${player.salary}</td>
        `
      const rosterElement = document.createElement("tr");
      rosterElement.innerHTML = temp; 
      table.appendChild(rosterElement);
      }
     
     }
     const salary =  document.createElement("tr");
     salary.style.marginBottom = "25px";
     salary.innerHTML = `<td>Salary: ${this.#roster["salary"]}</td>`
     table.appendChild(salary);
  }
  register = () => {
    const el = document.getElementById(`submit-${this.#id}`);
      el.addEventListener('click', function (e){
      e.preventDefault();
      console.log(`ready to save`); // api: send comment to db, on verification, append to comments(first child)
    }); 
  }
}