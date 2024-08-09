export function removeDuplicateGames(games){
  let FilteredGames = []; 
  games.forEach(element => {
      let found = false;
      FilteredGames.forEach(game => { 
        if(game["GameInfo"] == element["GameInfo"]){ 
          found = true;
        }
      });
      if(!found){ FilteredGames.push(element); }
    });
  return FilteredGames;
}