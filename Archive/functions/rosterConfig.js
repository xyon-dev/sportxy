import { buildFilteredRosters } from "./build-filtered-roster.js";
import { playerPool } from "../api/player-pool.js";
import { playersListUnited } from "../templates/nfl-players/playersListUnited.js";
import { GLOBALS } from "../store/globals.js";
import { choosePlayersForRosters } from "../pages/archive/choosePlayersForRosters.js";

/**
 * inputs: 
 * - API (playerPool)
 * - site name : string "dk" | "fd" | "yf" 
 * - game info values : array[strings] 
 * - roster type : string "filtered" | "all"
 * output: playerViewTemplate - tabbed 
 */

//let rosterFormat = setRosterFormat(GLOBALS.site);
let players; // all players

// list building funcitons : adds player to postion list
function addQB(player){
  GLOBALS.listQB.push(player);
}
function addRB(player){
  GLOBALS.listRB.push(player);
}
function addWR(player){
  GLOBALS.listWR.push(player);
}
function addTE(player){
  GLOBALS.listTE.push(player);
}
function buildFlexList(options){
  if(options.length<1){
    GLOBALS.listFLEX = [...GLOBALS.listRB, ...GLOBALS.listWR, ...GLOBALS.listTE];
  }else{
    for(let i=0; i<options.length; i++){
    switch(options[i]){
      case "RB":
      GLOBALS.listFLEX.push(...GLOBALS.listRB);
      break;
      case "WR":
      GLOBALS.listFLEX.push(...GLOBALS.listWR);
      break;
      case "TE":
      GLOBALS.listFLEX.push(...GLOBALS.listTE);
      break;
      default:
        console.log("ERROR: flex options not found"); 
    } } } 
}
function addDST(player){
  GLOBALS.listDST.push(player);
}  // end list building functions

// set salary cap
function setSalaryCap(site){
  switch(site){
    case "dk": 
      GLOBALS.salaryCap=50000;
      break;
    default:
      GLOBALS.salaryCap="ERROR: system failure"
  } 
}
function sortPlayerList(){
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

export async function configRoster(site, values, type, options){ 
 players = await playerPool(site, values, type);
 GLOBALS.players = players; 
 sortPlayerList(players);
 buildFlexList(options);
 setSalaryCap(site);
 choosePlayersForRosters();
 /* How to display players initially? 
 *  DraftKings style: all | ...positions
 */

}






/**
 * ARCHIVE
 */

  //type == "f" ? rosters = buildFilteredRosters(players) : console.log("rosterConfig.js: 'too many roster to count'");
// rosters = buildRosters(siteName, 
//   salaryCap,
//   players,
//   rosterFormat,
//   listRB,
//   listWR,
//   listQB,
//   listTE,
//   listDST
//);
