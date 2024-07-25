import { GLOBALS } from "../store/globals.js";


/*  in: date; sport (future)
 *  fetch game schedule
 *  out: array of games
 */ 
export async function getSchedule(site, sport, type){
  //fetch schedule
  let body = {
    site: GLOBALS.site
  }  
  const headers = {
    "method": "POST",
    "sport": sport,
    "type": type,
    "body": JSON.stringify(body)
  }
  if(site == "draft kings"){
  await fetch('http://localhost/sportxy/api/backend/get-dk.php', { headers })
    .then((response) => response.json())
    .then((data) => {
      GLOBALS.schedule = data.toSpliced();
    });
  return GLOBALS.schedule;
  }
}

/**
 * ARCHIVE
 */

//export let schedule;