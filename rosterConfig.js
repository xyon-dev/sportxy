import { buildFilteredRosters } from "./build-filtered-roster.js";
import { playerPool } from "./data/player-pool.js";

let rosters;
let siteName;
let salaryCap;
let players;
let rosterFormat;
let listRB=[];
let listWR=[];
let listQB=[];
let listTE=[];
let listDST=[];
// list building funcitons : adds player to postion list
function addQB(player){
  listQB.push(player);
}
function addRB(player){
  listRB.push(player);
}
function addWR(player){
  listWR.push(player);
}
function addTE(player){
  listTE.push(player);
}
function addDST(player){
  listDST.push(player);
}
// end list building functions

// set salary cap
function setSalaryCap(site){
  switch(site){
    case "dk": 
      salaryCap=50000;
      break;
    default:
      salaryCap="ERROR: system failure"
  } 
}

export async function configRoster(site, values, type){
  players = await playerPool(site, values, type);
  // for (let i = 0; i < players.length; i++){
  //   switch(players[i]["position"]){
  //     case 'QB':
  //       addQB(players[i]);
  //       break;
  //     case 'RB':
  //       addRB(players[i]);
  //       break;
  //     case 'WR':
  //       addWR(players[i]);
  //       break;
  //     case 'TE':
  //       addTE(players[i]);
  //       break;
  //     case 'DST':
  //       addDST(players[i]);
  //       break;
  //     default:
  //       console.log("error not found in position list");
  //     }
  // }
  type == "f" ? rosters = buildFilteredRosters(players) : console.log("rosterConfig.js: 'too many roster to count'");
}

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
