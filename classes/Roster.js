import { Player } from "./Player.js";
// Roster CLASS
export class Roster {
  #id;
  #q;
  #r1;
  #r2;
  #w1;
  #w2;
  #w3;
  #t;
  #f;
  #d;
  #roster;
  #sal;
  constructor(id, roster){
    this.#roster=roster;
    this.#id = id;
    this.#q = roster.q;
    this.#r1 = roster.r1;
    this.#r2 = roster.r2
    this.#w1 = roster.w1;
    this.#w2 = roster.w2;
    this.#w3 = roster.w3;
    this.#t = roster.t;
    this.#f = roster.f;
    this.#d = roster.d;
  }
  salary = () => {
    let salary= 0;
    for(const player in this.#roster){
      salary += Number(this.#roster[player]["salary"]);
    };
   return salary;
  }
  
  temp = (elemID) => { // import player class
      for(const player in this.#roster){
        // get target element
        const elem = document.getElementById(elemID); 
        // create new player
        const newPlayer = new Player(this.#roster[player]);
        const newPlayerTemp = newPlayer.temp(); 
        // create new element
        let div = document.createElement("section"); 
        // put new player template in new element
        div.innerHTML = newPlayerTemp; 
        console.log(div);
        // put element on page
       
        elem.append(div);
      };
  }
  register = () => {
    const el = document.getElementById(`submit-${this.#id}`);
      el.addEventListener('click', function (e){
      e.preventDefault();
      console.log(`ready to save`); // api: send comment to db, on verification, append to comments(first child)
    }); 
  }
}