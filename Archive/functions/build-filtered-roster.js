import { qbWrStacks } from "./stack-loop.js";
import { qbWrStacksOptimized } from "./optimized-roster/stack-loop.js";
// const filteredPlayerPool = [
// //  CMAC rb1
//   {
//     AvgPointsPerGame
//     : 
//     "32",
//     GameInfo
//     : 
//     "DAL@SF 10/08/2023 08:20PM ET",
//     TeamAbbrev
//     : 
//     "SF",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "1",
//     name
//     : 
//     "Christian McCaffrey",
//     nameID
//     : 
//     "Christian McCaffrey (30042020)",
//     playerID
//     : 
//     "30042020",
//     position
//     : 
//     "RB",
//     rosterPos
//     : 
//     "RB/FLEX",
//     salary
//     : 
//     "9400",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // justin jefferson wr1
//   {
//     AvgPointsPerGame
//     : 
//     "28",
//     GameInfo
//     : 
//     "KC@MIN 10/08/2023 04:25PM ET",
//     TeamAbbrev
//     : 
//     "MIN",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "2",
//     name
//     : 
//     "Justin Jefferson",
//     nameID
//     : 
//     "Justin Jefferson (30042350)",
//     playerID
//     : 
//     "30042350",
//     position
//     : 
//     "WR",
//     rosterPos
//     : 
//     "WR/FLEX",
//     salary
//     : 
//     "9400",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // tyreek hill wr2
//   {
//     AvgPointsPerGame
//     : 
//     "27",
//     GameInfo
//     : 
//     "NYG@MIA 10/08/2023 01:00PM ET",
//     TeamAbbrev
//     : 
//     "MIA",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "3",
//     name
//     : 
//     "Tyreek Hill",
//     nameID
//     : 
//     "Tyreek Hill (30042352)",
//     playerID
//     : 
//     "30042352",
//     position
//     : 
//     "WR",
//     rosterPos
//     : 
//     "WR/FLEX",
//     salary
//     : 
//     "9000",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // cooper kupp wr3
//   {
//     AvgPointsPerGame
//     : 
//     "0",
//     GameInfo
//     : 
//     "PHI@LAR 10/08/2023 04:05PM ET",
//     TeamAbbrev
//     : 
//     "LAR",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "4",
//     name
//     : 
//     "Cooper Kupp",
//     nameID
//     : 
//     "Cooper Kupp (30042354)",
//     playerID
//     : 
//     "30042354",
//     position
//     : 
//     "WR",
//     rosterPos
//     : 
//     "WR/FLEX",
//     salary
//     : 
//     "8600",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // Diggs wr4
//   {
//     AvgPointsPerGame
//     : 
//     "26",
//     GameInfo
//     : 
//     "JAX@BUF 10/08/2023 09:30AM ET",
//     TeamAbbrev
//     : 
//     "BUF",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "5",
//     name
//     : 
//     "Stefon Diggs",
//     nameID
//     : 
//     "Stefon Diggs (30042356)",
//     playerID
//     : 
//     "30042356",
//     position
//     : 
//     "WR",
//     rosterPos
//     : 
//     "WR/FLEX",
//     salary
//     : 
//     "8400",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // pat mahomes qb1
//   {
//     AvgPointsPerGame
//     : 
//     "22",
//     GameInfo
//     : 
//     "KC@MIN 10/08/2023 04:25PM ET",
//     TeamAbbrev
//     : 
//     "KC",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "6",
//     name
//     : 
//     "Patrick Mahomes",
//     nameID
//     : 
//     "Patrick Mahomes (30041930)",
//     playerID
//     : 
//     "30041930",
//     position
//     : 
//     "QB",
//     rosterPos
//     : 
//     "QB",
//     salary
//     : 
//     "8200",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // josh allen qb2
//   {
//     AvgPointsPerGame
//     : 
//     "25",
//     GameInfo
//     : 
//     "JAX@BUF 10/08/2023 09:30AM ET",
//     TeamAbbrev
//     : 
//     "BUF",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "7",
//     name
//     : 
//     "Josh Allen",
//     nameID
//     : 
//     "Josh Allen (30041931)",
//     playerID
//     : 
//     "30041931",
//     position
//     : 
//     "QB",
//     rosterPos
//     : 
//     "QB",
//     salary
//     : 
//     "8100",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // saquan barkley rb2
//   {
//     AvgPointsPerGame
//     : 
//     "18",
//     GameInfo
//     : 
//     "NYG@MIA 10/08/2023 01:00PM ET",
//     TeamAbbrev
//     : 
//     "NYG",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "8",
//     name
//     : 
//     "Saquon Barkley",
//     nameID
//     : 
//     "Saquon Barkley (30042022)",
//     playerID
//     : 
//     "30042022",
//     position
//     : 
//     "RB",
//     rosterPos
//     : 
//     "RB/FLEX",
//     salary
//     : 
//     "8100",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // davante adams wr5
//   {
//     AvgPointsPerGame
//     : 
//     "23",
//     GameInfo
//     : 
//     "GB@LV 10/09/2023 08:15PM ET",
//     TeamAbbrev
//     : 
//     "LV",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "9",
//     name
//     : 
//     "Davante Adams",
//     nameID
//     : 
//     "Davante Adams (30042358)",
//     playerID
//     : 
//     "30042358",
//     position
//     : 
//     "WR",
//     rosterPos
//     : 
//     "WR/FLEX",
//     salary
//     : 
//     "8100",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // Jalen Hurts qb3
//   {
//     AvgPointsPerGame
//     : 
//     "22",
//     GameInfo
//     : 
//     "PHI@LAR 10/08/2023 04:05PM ET",
//     TeamAbbrev
//     : 
//     "PHI",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "10",
//     name
//     : 
//     "Jalen Hurts",
//     nameID
//     : 
//     "Jalen Hurts (30041932)",
//     playerID
//     : 
//     "30041932",
//     position
//     : 
//     "QB",
//     rosterPos
//     : 
//     "QB",
//     salary
//     : 
//     "8000",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // AJ Brown wr6
//   {
//     AvgPointsPerGame
//     : 
//     "22",
//     GameInfo
//     : 
//     "PHI@LAR 10/08/2023 04:05PM ET",
//     TeamAbbrev
//     : 
//     "PHI",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "11",
//     name
//     : 
//     "A.J. Brown",
//     nameID
//     : 
//     "A.J. Brown (30042360)",
//     playerID
//     : 
//     "30042360",
//     position
//     : 
//     "WR",
//     rosterPos
//     : 
//     "WR/FLEX",
//     salary
//     : 
//     "8000",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // Bijan Robinson rb3
//   {
//     AvgPointsPerGame
//     : 
//     "19",
//     GameInfo
//     : 
//     "HOU@ATL 10/08/2023 01:00PM ET",
//     TeamAbbrev
//     : 
//     "ATL",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "15",
//     name
//     : 
//     "Bijan Robinson",
//     nameID
//     : 
//     "Bijan Robinson (30042024)",
//     playerID
//     : 
//     "30042024",
//     position
//     : 
//     "RB",
//     rosterPos
//     : 
//     "RB/FLEX",
//     salary
//     : 
//     "7700",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // Kelce TE1
//   {
//     AvgPointsPerGame
//     : 
//     "15",
//     GameInfo
//     : 
//     "KC@MIN 10/08/2023 04:25PM ET",
//     TeamAbbrev
//     : 
//     "KC",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "18",
//     name
//     : 
//     "Travis Kelce",
//     nameID
//     : 
//     "Travis Kelce (30042876)",
//     playerID
//     : 
//     "30042876",
//     position
//     : 
//     "TE",
//     rosterPos
//     : 
//     "TE/FLEX",
//     salary
//     : 
//     "7600",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // Hock TE2
//   {
//     AvgPointsPerGame
//     : 
//     "14",
//     GameInfo
//     : 
//     "KC@MIN 10/08/2023 04:25PM ET",
//     TeamAbbrev
//     : 
//     "MIN",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "38",
//     name
//     : 
//     "T.J. Hockenson",
//     nameID
//     : 
//     "T.J. Hockenson (30042878)",
//     playerID
//     : 
//     "30042878",
//     position
//     : 
//     "TE",
//     rosterPos
//     : 
//     "TE/FLEX",
//     salary
//     : 
//     "6500",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // CAR DEF1
//   {
//     AvgPointsPerGame
//     : 
//     "6",
//     GameInfo
//     : 
//     "CAR@DET 10/08/2023 01:00PM ET",
//     TeamAbbrev
//     : 
//     "CAR",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "695",
//     name
//     : 
//     "Panthers",
//     nameID
//     : 
//     "Panthers  (30043202)",
//     playerID
//     : 
//     "30043202",
//     position
//     : 
//     "DST",
//     rosterPos
//     : 
//     "DST",
//     salary
//     : 
//     "2200",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
//   // JAX DEF2
//   {
//     AvgPointsPerGame
//     : 
//     "9",
//     GameInfo
//     : 
//     "JAX@BUF 10/08/2023 09:30AM ET",
//     TeamAbbrev
//     : 
//     "JAX",
//     createdAt
//     : 
//     "0000-00-00 00:00:00",
//     id
//     : 
//     "694",
//     name
//     : 
//     "Jaguars",
//     nameID
//     : 
//     "Jaguars  (30043201)",
//     playerID
//     : 
//     "30043201",
//     position
//     : 
//     "DST",
//     rosterPos
//     : 
//     "DST",
//     salary
//     : 
//     "2300",
//     updatedAt
//     : 
//     "0000-00-00 00:00:00"
//   },
// ]
/**
 *  AvgPointsPerGame: "32",
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
let q = [];
let r = [];
let w = [];
let t = [];
let d = [];
let f = [];
let qwStacks = [];
let rbStacks = [];

// +++ 
function filterPosition(pos, data){
 
  switch(pos){
    case 'QB':
      q.push(data);
      break;
    case 'RB':
      r.push(data);
      break;
    case 'WR':
      w.push(data);
      break;
    case 'TE':
      t.push(data);
      break;
    case 'DST':
      d.push(data);
      break;
    default:
      console.log("error");
  }
}
// +++
function buildPositionLists(pool){
 // loop through pool : send items to fiter : position arrays filled
 for(let i=0; i < pool.length; i++){
  filterPosition(pool[i]["position"], pool[i]);
 }
 f = [...w, ...r]; 
}
// +++
function buildRbStacks(rb){
  for(let i=0; i<rb.length; i++){
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
        qwStacks.push({ q:qb[i], w:w[j]});
      } 
    }
  }
  //console.log(qwStacks);
}
/* +++ 
ADD TO VER 2.0: let wrStacksThree = [];
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
*/

// +
export function buildFilteredRosters(filteredPlayerPool, type){
  
  buildPositionLists(filteredPlayerPool); // sort players into position variables
  buildRbStacks(r);
  buildQbWrStacks(q,w);
  //buildWrPairsThree(w)
  //buildWrPairsTwo(w, qwStacks);
  if(type=="optimized"){
    let optimizedRosters = qbWrStacksOptimized(qwStacks, rbStacks,w,t,d);
    return(optimizedRosters);
  }else{
    let rosters = qbWrStacks(qwStacks, rbStacks, w, t, f, d); // rosters built here
    return(rosters);
  }
  //return rosters;
}
//buildFilteredRosters();