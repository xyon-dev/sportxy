import { main } from "../../../sports-money-dfs/main.js"
import { chooseSiteSportDayTemplate as template } from "../../templates/chooseSiteSportDay-tmp.js"; // DOESNT WORK
import { GLOBALS } from "../../store/globals.js";
import { getSchedule } from "../../api/getSchedule.js";
import { chooseTeamsForPlayersToPicks } from "../pages/chooseTeamsForPlayersToPick.js";
/********* ABOUT ********************
 * actions: 
 * - inserts selectSiteForm into main - 7/19/24
 * - sets SITE - 7/19/24
 * action-element: Form [submit]
 * next: viewGameSchedule
 ************************************/
export function chooseSiteSportDay(){
  /*insert template: 
  * do not change this: main.innerHTML=template()
  * any other way wont work
  */
  main.innerHTML = template();

  // add event listener: SUBMIT
  const siteSelectForm = document.getElementById("selectSiteForm");
  siteSelectForm.addEventListener('submit', function(e){
  e.preventDefault();
  const form = selectSiteForm;
  const siteSubmit = document.querySelector("#submit-select site");
  const siteSelectFormData = new FormData(form, siteSubmit);
  // assign GLOBALS.site with user selected site, and flex options
    for (const [key, value] of siteSelectFormData) {
      //rosterOptionsFormData[key]=value;
      if(key == "site"){
        GLOBALS.site = value;
      }else{
        GLOBALS.rosterOptions.push(value);
      }
    }
    chooseTeamsForPlayersToPicks();
});
}