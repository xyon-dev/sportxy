// get DK data
async function getCurrentDkData (site, filter, type){
  let rosterData;
  const headers = {
    "site":JSON.stringify(site),
    "body":JSON.stringify(filter), // array of games
    "type":type 
  }
  await fetch("http://localhost/sportxy/api/backend/get-dk.php", { headers })
  .then((response) => response.json())
  .then((data) => {
      rosterData = data;
  })
  return rosterData;
}

// return player pool from requested site
export async function playerPool(site, filter, type){ 
  let data;
  switch(site){
    case "dk":
      data = await getCurrentDkData(site, filter, type); 
      break;
    default:
      data =  "ERROR: could not retrieve data * player-pool.js";
  }
  
  return data;
}