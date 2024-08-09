export function removeDuplicateRosters(rosters){
  let newRosterList = rosters.toSpliced();
  for(let i=0; i<rosters.length-1; i++){
    if(newRosterList[i] == -1){
      continue;
    }else{
      for(let j=i+1; j<newRosterList.length; j++){
        if(newRosterList[i]["salary"] !== newRosterList[j]["salary"]){
          continue;
        }else{
          let similarValues = 0;
          for(const key in newRosterList[i]){ 
            if(newRosterList[i][key] == newRosterList[j][key]){ similarValues++; };
          }
          if(similarValues == 5){ newRosterList[j] = -1};
        }}}
  }
  let finalRosterList = []
  for(const value of newRosterList){
    if(value !== -1){ finalRosterList.push(value)}
  }
  // get downloadable file
 return finalRosterList;
}