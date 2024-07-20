export function buildRosters(
  siteName, 
  salaryCap,
  players,
  rosterFormat,
  listRB,
  listWR,
  listQB,
  listTE,
  listDST
){
  let qb=[], rb=[], wr=[], te=[], flex=[], dst=[];
  let rbSets = [];
  for(let i = 0; i<3; i++){
    qb.push(listQB[i]);
    rb.push(listRB[i]);
    wr.push(listWR[i]);
    wr.push(listWR[i+3]);
    te.push(listTE[i]);
    dst.push(listDST[i]);
    flex.push(listWR[i+3]);
    flex.push(listRB[i+3]);
  }
  console.log("building roster");
  // RB combos
  for(i = 0; i < rb.length; i++){
    //
  }
}