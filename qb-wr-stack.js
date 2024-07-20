// in: qb/wr stack (from build-filtered-roster)
// out: full rosters featuring qb/wr stack

// GLOBALS
let wrStacksTwo = [];
let rosters = [];
// build wrPairs while excluding stacked wr
function buildWrPairsTwo(list, exclude){
  let newList = list.toSpliced();
  for(let i=0; i<=newList.length; i++){
    for(let j=i+1; j<=newList.length-1; j++){
      wrStacksTwo.push({
        w1:list[i], 
        w2:list[j], 
      });
    }
  }
  //console.log(wrStacksTwo);
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
function excludeUsedPlayers(flexPool, exFromFlex){
  let newFlex  = flexPool.toSpliced();
  for(let i=0; i<flexPool.length; i++){
    // player id matches value in exFromFlex[]
    let exIndex = exFromFlex.indexOf(flexPool[i]["id"]); 
    if(exIndex >= 0){
      let spliceIndex;
      for(let j=0; j<newFlex.length; j++){
        if(newFlex[j]["id"]==flexPool[i]["id"]){
          newFlex = newFlex.toSpliced(j, 1);
        }
      }
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
   
  if(sum <= 66000){ return true }else{ return false};
}
// build roster
// loop through arrays : build object push to rosters
function qbWrStackRoster(stack, rStacks,w, t, f, d){
  let wr = w;
  let excludedList = spliceExcluded(wr, stack.w.id);
  buildWrPairsTwo(excludedList, stack.w.id);
    for(let i=0; i<rStacks.length; i++){  
    for(let j=0; j<wrStacksTwo.length; j++){ 
      if(wrStacksTwo[j]["w1"]["id"] == stack.w.id || wrStacksTwo[j]["w2"]["id"] == stack.w.id){continue}
    for(let k=0; k<t.length; k++){
    for(let l=0; l<d.length; l++){
      let flex = excludeUsedPlayers(f, [stack.w.id,
        rStacks[i]["rb1"]["id"],
        rStacks[i]["rb2"]["id"],
        wrStacksTwo[j]["w1"]["id"],
        wrStacksTwo[j]["w2"]["id"]]);
    for(let m=0; m<flex.length; m++){
      let newRoster = {};
      newRoster.qb=stack.q;             //console.log(stack.q);
      newRoster.rb1=rStacks[i]["rb1"];  //console.log(rStacks[i]["rb1"]);
      newRoster.rb2=rStacks[i]["rb2"];  //console.log(rStacks[i]["rb2"]);
      newRoster.wr1=stack.w;            //console.log(stack.w);
      newRoster.wr2=wrStacksTwo[j]["w1"];  //console.log(wrStacksTwo[j]["w1"]);
      newRoster.wr3=wrStacksTwo[j]["w2"];  //console.log(wrStacksTwo[j]["w2"]);
      newRoster.te=t[k];                //console.log(t[k]);
      newRoster.flex=flex[m];              //console.log(f[m]);
      newRoster.dst=d[l];               //console.log(d[l]);
      let sumOfSalarys = sumSalarys(newRoster);
      if(sumOfSalarys){ rosters.push(newRoster); }
    }}}}}
    // console.log(rosters);
}
export function qbWrStacks(stacks, rStacks, w, t, f, d){ 
  for(let i=0; i<stacks.length; i++){
    console.log(stacks);
    //qbWrStackRoster(stacks[i], rStacks,w, t, f, d);
  }
  return rosters;
}