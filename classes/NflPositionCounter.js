import { ROSTER_DATA } from "../store.js";

export class NflPositionCounter{
  #parentID
  #count
  constructor(parentID){
    this.#parentID = parentID;
    this.rosterData = ROSTER_DATA.playerCount;
    this.#count = {
      qb: 0,
      rb: 0,
      wr: 0,
      te: 0,
      dst: 0,
    };
  }
  set count(obj){
    this.#count[obj.pos] = obj.count; 
  }
  get count(){
    return this.#count;
  }
  temp(){
    const container = document.createElement("aside");
    container.id = "playerCount"
    container.innerHTML = `
      <section class="position-counter"><div>QB:</div><div id="QB">${this.#count.qb}</div></section>
      <section class="position-counter"><div>RB:</div><div id="RB">${this.#count.rb}</div></section>
      <section class="position-counter"><div>WR:</div><div id="WR">${this.#count.wr}</div></section>
      <section class="position-counter"><div>TE:</div><div id="TE">${this.#count.te}</div></section>
      <section class="position-counter"><div>DST:</div><div id="DST">${this.#count.dst}</div></section>
    `
    const parent = document.getElementById(`${this.#parentID}`)
    parent.appendChild(container);
  }
  refresh(pos, action){
    switch(pos){
      case "QB":
        const qb = getElementById("QB");
        action == "add" ? qb.innerHTML = `QB:${this.count.qb++}` : qb.innerHTML = `QB:${this.count.qb--}`
    }
    const rb = getElementById("RB");
    const wr = getElementById("WR");
    const te = getElementById("TE");
    const dst = getElementById("DST");
  }
}