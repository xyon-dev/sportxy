import { QUERY } from "../store/store.js";
import { GLOBALS } from "../store/store.js";
import { removeDuplicateGames } from "../../functions/removeDuplicateGames.js";
/*  in: date; sport (future)
 *  fetch game schedule
 *  out: array of games
 */ 
export async function getSchedule(site, sport, type){
  //fetch schedule
  let body = {
    site: QUERY.site
  }  
  const headers = {
    "method": "POST",
    "sport": sport,
    "type": type,
    "body": JSON.stringify(body)
  }
  if(site == "dk"){
  await fetch('http://localhost/sportxy/api/backend/get-dk.php', { headers })
    .then((response) => response.json())
    .then((data) => {
      let newSchedule = removeDuplicateGames(data);

      GLOBALS.schedule = newSchedule;
    });
  return GLOBALS.schedule;
  }
}

/**
 * ARCHIVE
 */

//export let schedule;