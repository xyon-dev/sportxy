import { GLOBALS } from "../store/globals.js";
export function playerCount(pos, player, updateID){
  let element = document.getElementById(updateID);
  let operation  = "add";
  let zero = 0;
  // see if checkbox is checked then set operation to add or sub
  switch(pos){
    case "QB":
      operation = "add" ? playerCount.qb += 1 : playerCount.qb -= 1;
      element.innerHTML = `QB: ${GLOBALS.playerCount.qb}`;
      break;
    case "RB":
      operation = "add" ? playerCount.rb += 1 : playerCount.rb -= 1;
      element.innerHTML = `RB: ${GLOBALS.playerCount.rb}`;
      break;
    case "WR":
      operation = "add" ? playerCount.wr += 1 : playerCount.wr -= 1;
      element.innerHTML = `WR: ${GLOBALS.playerCount.wr}`;
      break;
    case "TE":
      operation = "add" ? playerCount.te += 1 : playerCount.te -= 1;
      element.innerHTML = `TE: ${GLOBALS.playerCount.te}`;
      break;
    case "DST":
      operation = "add" ? playerCount.dst += 1 : playerCount.dst -= 1;
      element.innerHTML = `DST: ${GLOBALS.playerCount.ds}`;
      break;
  }
 
}