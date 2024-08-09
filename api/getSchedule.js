import { SCHEDULE } from "../store.js";


/*  in: date; sport (future)
 *  fetch game schedule
 *  out: array of games
 */ 
export async function getSchedule(query, type){ console.log(query);
  //fetch schedule
  let body = {
    site: query.site
  }  
  const headers = {
    "method": "POST",
    "sport": query.sport,
    "type": type,
    "body": JSON.stringify(body)
  }
  if(query.site == "dk"){
  await fetch('http://localhost/sportxy/api/backend/get-dk.php', { headers })
    .then((response) => response.json())
    .then((data) => {
      SCHEDULE.games = data.toSpliced(); 
    });
  return SCHEDULE.games;
  }
}

/**
 * ARCHIVE
 */

//export let schedule;