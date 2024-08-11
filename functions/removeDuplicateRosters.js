export function removeDuplicateRosters(rosters){
  let finalRosterList = [];
  let excludedRosters = [];
  for(let i=0; i<rosters.length; i++){
    for(let j=i+1; j<rosters.length; j++){
      let r1 = rosters[i];
      let r2 = rosters[j]; 
      if(r1["salary"] == r2["salary"]){
        let SimilarValues = 0;
        let values = [];
        for(const key in r1){
          values.push(r1[key]["ID"]);
        }
        // compare
        for(const key in r2){
          let value = values.indexOf(r2[key]["ID"]);
          if(value >= 0){
            SimilarValues++;
          }
        }
        if(SimilarValues == 10){ 
          let index = excludedRosters.indexOf(j);
          if(index < 0){
            excludedRosters.push(j);
          }
        }
      }else{
        continue;
      }
    }
  }
  for(let i=0; i<rosters.length; i++){
    if(excludedRosters.indexOf(i) == -1){
      finalRosterList.push(rosters[i]);
    }
  }
return finalRosterList;
}