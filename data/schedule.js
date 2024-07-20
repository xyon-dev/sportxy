/*  in: date; sport (future)
 *  fetch game schedule
 *  out: array of games
 */ 
export let schedule;
export async function getSchedule(){
  //fetch schedule
  let body = {
    "site": "dk"
  }
  const headers = {
    "method": "POST",
    "sport": "nfl",
    "type": "dst",
    "body": JSON.stringify(body)
  }
  await fetch('http://localhost/sportsmoney/dfs/get-dk.php', { headers })
    .then((response) => response.json())
    .then((data) => {
      schedule = data.toSpliced();
    });
  return schedule;
}