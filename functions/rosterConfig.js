import { ROSTER_DATA, SELECTED_PLAYERS, QUERY } from "../store.js";
/**
 * inputs: 
 * - API (playerPool)
 * - site name : string "dk" | "fd" | "yf" 
 * - game info values : array[strings] 
 * - roster type : string "filtered" | "all"
 * output: playerViewTemplate - tabbed 
 */

//let rosterFormat = setRosterFormat(GLOBALS.site);

// list building funcitons : adds player to postion list
function addQB(player){
  ROSTER_DATA.listQB.push(player);
}
function addRB(player){
  ROSTER_DATA.listRB.push(player);
}
function addWR(player){
  ROSTER_DATA.listWR.push(player);
}
function addTE(player){
  ROSTER_DATA.listTE.push(player);
}
function buildFlexList(options){
  if(options.length<1){
    ROSTER_DATA.listFLEX = [...ROSTER_DATA.listRB, ...ROSTER_DATA.listWR, ...ROSTER_DATA.listTE];
  }else{
    for(let i=0; i<options.length; i++){
    switch(options[i]){
      case "RB":
      ROSTER_DATA.listFLEX.push(...ROSTER_DATA.listRB);
      break;
      case "WR":
      ROSTER_DATA.listFLEX.push(...ROSTER_DATA.listWR);
      break;
      case "TE":
      ROSTER_DATA.listFLEX.push(...ROSTER_DATA.listTE);
      break;
      default:
        console.log("ERROR: flex options not found"); 
    } } } 
}
function addDST(player){
  ROSTER_DATA.listDST.push(player);
}  // end list building functions

// set salary cap
function setSalaryCap(site){
  switch(site){
    case "dk": 
      ROSTER_DATA.salaryCap=50000;
      break;
    default:
      ROSTER_DATA.salaryCap="ERROR: system failure"
  } 
}
function sortPlayerList(players){
  for (let i = 0; i < players.length; i++){ 
    switch(players[i]["position"]){
      case 'QB':
        addQB(players[i]);
        break;
      case 'RB':
        addRB(players[i]);
        break;
      case 'WR':
        addWR(players[i]);
        break;
      case 'TE':
        addTE(players[i]);
        break;
      case 'DST':
        addDST(players[i]);
        break;
      default:
        console.log("error not found in position list");
      }
  }
  //console.log( "rb: ",listRB.length, "wr: ",listWR.length, "qb: ",listQB.length, "te: ", listTE.length, "dst: ", listDST.length );
}

export async function configRoster(pool, options){ 
 sortPlayerList(pool);
 buildFlexList(options);
 setSalaryCap(QUERY.site);
 /* How to display players initially? 
 *  DraftKings style: all | ...positions
 */
}
