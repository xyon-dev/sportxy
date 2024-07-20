import { configRoster } from "./functions/rosterConfig.js";
import { getSchedule } from "./api/getSchedule.js";
import { viewScheduleTemplate } from "./templates/nfl-schedule/schedule-temp.js";
import { playerPool } from "./api/player-pool.js";
import { chooseSiteSportDay } from "./functions/chooseSiteSportDay.js";


// GLOBALS
let PLAYER_POOL;
const main = document.getElementById("main");
chooseSiteSportDay();


/*
 * in: sport (future), date (future)
 * print games selection form 
 * out: game schedule form - template
 * */ 
async function home(site){
  let schedule = await getSchedule();                       
  let homeTemplate = await viewScheduleTemplate(schedule);
  main.innerHTML = homeTemplate;
  const gameScheduleForm = document.getElementById("formxy");
  gameScheduleForm.addEventListener('submit', function(e){
    e.preventDefault();
    const form = document.getElementById("formxy");
    const submitter = document.querySelector("#button[id=btn-get-data]");
    const formData = new FormData(form, submitter);
    let values = [...formData.keys()];
    let type;
    values.length != 0 ? type = "f" : type = "a"; 
    configRoster(site, values, type);
    // send values to rosterConfig - filtered | full
});
}
///home();



// get player pool for selected site i.e. get all from db
  // check fail
    // send error message or 
    // return form (user select player pool)
    // create obj from selected players
    // send form data to roster.js