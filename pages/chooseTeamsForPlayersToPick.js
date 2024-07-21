import { getSchedule } from "../api/getSchedule.js";
import { viewScheduleTemplate } from "../templates/nfl-schedule/schedule-temp.js";
import { GLOBALS } from "../store/globals.js";
import { configRoster } from "../functions/rosterConfig.js";

/* actions: 
 * - insert game schedule into main
 * in: game schedule from api(getSchedule)
 * out: game schedule form - viewScheduleTemplate()
 * next: configRoster() [on submit]
 * */ 
export async function chooseTeamsForPlayersToPicks(){
  let MAIN = document.getElementById("main");
  let schedule = await getSchedule("nfl", "dst");
  let template = viewScheduleTemplate(schedule);
  MAIN.innerHTML = template

  // Add Event Listener
  const gameScheduleForm = document.getElementById("formxy");
  gameScheduleForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    const form = document.getElementById("formxy");
    const submitter = document.querySelector("#button[id=btn-get-data]");
    const formData = new FormData(form, submitter);
    let values = [...formData.keys()];
    let type;
    values.length != 0 ? type = "f" : type = "a"; 
    configRoster(GLOBALS.site, values, type, GLOBALS.rosterOptions);
  });
}