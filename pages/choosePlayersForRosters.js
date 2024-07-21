import { GLOBALS } from "../store/globals.js";
import { playerListTemplateProvider } from "../templates/nfl-players/playerListPositions.js";
/**
 * actions: 
 * -receive player list
 * -send players to roster view
 * inputs: players
 * output: playerSelectionForm
 * next: build and view rosters
 */
export function choosePlayersForRosters(){
  // insert player template
  let main = document.getElementById("main");
  let template = playerListTemplateProvider("all");
  main.innerHTML = template;
  // handle submit : submit index of player in GLOBALS.players
  const playerSelectForm = document.getElementById("playerSelectForm");
  playerSelectForm.addEventListener('submit', function(e){
  e.preventDefault();
  const form = playerSelectForm;
  const siteSubmit = document.querySelector("#submit-player-select-form");
  const siteSelectFormData = new FormData(form, siteSubmit);
  // assign GLOBALS.site with user selected site, and flex options
    for (const [key, value] of siteSelectFormData) {
      console.log(key, value);
    }
    
});
}