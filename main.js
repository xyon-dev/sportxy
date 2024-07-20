import { configRoster } from "./rosterConfig.js";
import { getSchedule } from "./data/schedule.js";
import { viewScheduleTemplate } from "./templates/schedule-temp.js";
import { playerPool } from "./data/player-pool.js";

// GLOBALS
let PLAYER_POOL;
const main = document.getElementById("main");

/**
 * submit sit select form : add click event listener
 * run home()
 */
const siteSelectForm = document.getElementById("selectSiteForm");
siteSelectForm.addEventListener('submit', function(e){
  e.preventDefault();
  const form = selectSiteForm;
  const siteSubmit = document.querySelector("#submit-select site");
  const siteSelectFormData = new FormData(form, siteSubmit);
  for (const [key] of siteSelectFormData) {
    PLAYER_POOL = key;
  }
  home(PLAYER_POOL);
});

/**
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
    //s; 
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