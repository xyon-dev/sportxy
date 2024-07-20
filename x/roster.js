//
import { playerPool } from "../data/player-pool.js";
import { buildRosters } from "./build-rosters.js";
//
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
// get player pool
async function getPlayerPool(site){
  let pool = await playerPool(site);
  return pool;
}
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
async function filterPlayerPool(site){
  players = await getPlayerPool(site);
  console.log(players);
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
}

// config roster: set variables
export async function rosterConfig(site){
  setSalaryCap(site);
  siteName=site;
  rosterFormat={
    qb:1,
    rb:2,
    wr:3,
    te:1,
    flex:{
      quantity: 1,
      positions: ["wr","rb","te"]
    }
  }
  await filterPlayerPool(site);
  rosters = buildRosters(siteName, 
    salaryCap,
    players,
    rosterFormat,
    listRB,
    listWR,
    listQB,
    listTE,
    listDST
  );
}

//s