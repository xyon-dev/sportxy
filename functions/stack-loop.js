// in: qb/wr stack (from build-filtered-roster)
// out: full rosters featuring qb/wr stack

import { ROSTERS } from "../store.js";
import { removeDuplicateRosters } from "./removeDuplicateRosters.js";


// GLOBALS
let wrPairs = [];
let wrSets = []
let rosters = [];
// build wrPairs while excluding stacked wr
function buildWrPairs(list){
  for(let i=0; i<=list.length; i++){
    for(let j=i+1; j<=list.length-1; j++){
      wrPairs.push({
        w1:list[i], 
        w2:list[j], 
      });
    }
  }
}
function buildWrSets(list){ // three recievers, third will be flex
  for(let i=0; i<=list.length; i++){
    for(let j=i+1; j< list.length; j++){
      for(let k=j+1; k<list.length; k++){
      wrSets.push({
        w1:list[i], 
        w2:list[j], 
        w3:list[k],
      });
     }
    }
  }

}
// Splice stack receiver  by "w.id"
function spliceExcluded(wr, exclude){
  let excludedList;                  //console.log(excludedList, exclude);
  //loop array w
  for(let i=0; i<wr.length; i++){
    if(wr[i]["id"]==exclude){  // check for id match          
      excludedList = wr.toSpliced(i,1); // if match : splice index 
    }
  }
 //console.log(exclude, excludedList);
 return excludedList;
}
function excludeUsedPlayersFromFlex(flexPool, excludedPlayersArray){
  // add players from flexPool if arent on exclude list
  let newFlex  = [];
  //loop through flexPool list
  for(let i=0; i<flexPool.length; i++){ 
    // if player[i] id matches value in excluded Array : indexOf
    // do not add to newFlex : continue
    const isExcluded = excludedPlayersArray.indexOf(flexPool[i]["id"]);
    if(isExcluded < 0){
      newFlex.push(flexPool[i]);
    }else{
      continue;
    }
  }
  return newFlex;
}
function sumSalarys(roster){
  let sum =0;
  sum += Number(roster.dst.salary);
  sum += Number(roster.flex.salary);
  sum += Number(roster.qb.salary);
  sum += Number(roster.rb1.salary);
  sum += Number(roster.rb2.salary);
  sum += Number(roster.te.salary);
  sum += Number(roster.wr1.salary);
  sum += Number(roster.wr2.salary);
  sum += Number(roster.wr3.salary);
  return sum;
}
// build roster
// loop through arrays : build object push to rosters
function qbWrStackRoster(stack, rStacks, w, t, d){

  wrSets = []; //needs reset from last run
  let wrListExcludingStackWR = spliceExcluded(w, stack.w.id); // for optimized roster a WR will always be flex
  buildWrSets(wrListExcludingStackWR);
    for(let i=0; i<rStacks.length; i++){  // RB LOOP
   
    for(let k=0; k<t.length; k++){        // TE LOOP
    for(let l=0; l<d.length; l++){        // DST LOOP
      /**
       * For optimized, only need to check for WR
       */
      // let flex = excludeUsedPlayersFromFlex(wrListExcludingStackWR,
      //   [wrPairs[j]["w1"]["id"],
      //   wrPairs[j]["w2"]["id"]]);
    //for(let m=0; m<flex.length; m++){
    for(let j=0; j<wrSets.length; j++){  // WR LOOP
        // if(wrPairs[j]["w1"]["id"] == stack.w.id || wrPairs[j]["w2"]["id"] == stack.w.id){continue} 
      let newRoster = {};
      newRoster.qb=stack.q;             //console.log(stack.q);
      newRoster.rb1=rStacks[i]["rb1"];  //console.log(rStacks[i]["rb1"]);
      newRoster.rb2=rStacks[i]["rb2"];  //console.log(rStacks[i]["rb2"]);
      newRoster.wr1=stack.w;            //console.log(stack.w);
      newRoster.wr2=wrSets[j]["w1"];  //console.log(wrPairs[j]["w1"]);
      newRoster.wr3=wrSets[j]["w2"];  //console.log(wrPairs[j]["w2"]);
      newRoster.te=t[k];                //console.log(t[k]);
      newRoster.flex=wrSets[j]["w3"];             //console.log(f[m]);
      newRoster.dst=d[l];               //console.log(d[l]);
      let sumOfSalarys = sumSalarys(newRoster);
      newRoster.salary = sumOfSalarys;
      if( 
        newRoster.wr1["ID"] == newRoster.wr2["ID"] ||
        newRoster.wr1["ID"] == newRoster.wr3["ID"] ||
        newRoster.wr1["ID"] == newRoster.flex["ID"] ||
        newRoster.wr2["ID"] == newRoster.wr3["ID"] ||
        newRoster.wr2["ID"] == newRoster.flex["ID"] ||
        newRoster.wr3["ID"] == newRoster.flex["ID"]){
          continue;
        }else if(sumOfSalarys <= 50000){
           rosters.push(newRoster);
        }else{
          console.log("Could not generate an eligable roster");
        }
    }}}}
   
    //console.log(wrPairs[j]["w1"]);
//     console.log(rosters);
}
export function qbWrStacksOptimized(stacks, rStacks, w, t, d){  
  //let optimizedFlexList = w; // only use WR for flex in optimized rosters
  for(let i=0; i<stacks.length; i++){

    // qbWrStackRoster(stacks[i], rStacks,w, t, optimizedFlexList, d);
    qbWrStackRoster(stacks[i], rStacks,w, t, d);
  }
  let finalRosterList = removeDuplicateRosters(rosters)
  return finalRosterList;
}