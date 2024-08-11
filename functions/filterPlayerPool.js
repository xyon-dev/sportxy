import { ROSTER_DATA } from "../store.js";
import { qbWrStacksOptimized } from "./stack-loop.js";
import { configRoster } from "./rosterConfig.js";

/**
 *  {
    AvgPointsPerGame: "32",
    GameInfo: "DAL@SF 10/08/2023 08:20PM ET",
    TeamAbbrev: "SF",
    createdAt: "0000-00-00 00:00:00",
    id: "1",
    name: "Christian McCaffrey",
    nameID: "Christian McCaffrey (30042020)",
    playerID: "30042020",
    position: "RB",
    rosterPos: "RB/FLEX",
    salary: "9400",
    updatedAt: "0000-00-00 00:00:00"
  },
 */

let qwStacks = [];
let rbStacks = [];
let wrStacksThree = [];

// +++
function buildRbStacks(r){
  for(let i=0; i<r.length; i++){
    for(let j=i+1; j<r.length; j++){
      rbStacks.push({rb1: r[i], rb2: r[j]});
    }
  }
  //console.log(rbStacks);
}
// +++
function buildQbWrStacks(qb, wr){
  for(let i=0; i<qb.length; i++){
    for(let j=0; j<wr.length; j++){
      if(qb[i]["TeamAbbrev"]==wr[j]["TeamAbbrev"]){
        qwStacks.push({ q:qb[i], w:wr[j]});
      } 
    }
  }
  //console.log(qwStacks);
}
// +++
function buildWrPairsThree(list){
  for(let i=0; i<=list.length; i++){
    for(let j=i+1; j<=list.length-1; j++){
      for(let k=j+1; k<=list.length-1; k++){
        wrStacksThree.push({
          w1:list[i], 
          w2:list[j], 
          w3:list[k]
        });
      }
    }
  }
  //console.log(wrStacksThree);
}
/**
 * 
 * stacked : bool
 * if true build rosters using qbWrStacks
 * if flase build rosters using three WR 
 */
export function buildFilteredRosters(pool, stacked){
  // configeRoster(playerPool, FlexOptions ["POSITION", "POSITION"])
  configRoster(pool, ["WR"]);
  buildRbStacks(ROSTER_DATA.listRB);
  buildQbWrStacks(ROSTER_DATA.listQB, ROSTER_DATA.listWR);
  //buildWrPairsThree(w)
  //buildWrPairsTwo(ROSTER_DATA.listWR, qwStacks);
  let rosters = qbWrStacksOptimized(qwStacks, rbStacks, ROSTER_DATA.listWR, ROSTER_DATA.listTE, ROSTER_DATA.listDST); 
  return rosters;
}
//buildFilteredRosters();
// buildPositionLists(filteredPlayerPool); 
