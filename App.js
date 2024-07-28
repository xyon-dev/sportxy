import { GameSchedule } from "./classes/GameSchedule.js";
import { siteSelectForm } from "./classes/SiteSelectForm.js";
import { Players } from "./classes/Players.js";
import { FILTERED_PLAYERS, SITES } from "./store/globals.js";
import { Players2 } from "./classes/Players2.js";
import { GLOBALS } from "./store/globals.js";
import { buildFilteredRosters } from "./functions/build-filtered-roster.js";
import { Roster } from "./classes/Roster.js";

export class App{
  constructor(){
  }
  start(){ // viewSiteSelectForm
    let site = new siteSelectForm(SITES);
    site.temp("App"); 
    site.register();
  }
 async GameSelect(data){ 
    let schedule = new GameSchedule(data.site, data.sport)
    await schedule.temp();
    schedule.register();
  }
  async PlayerSelect(games){ 
    let playerList = new Players2(games);
    await playerList.temp();
    playerList.register();
  }
  RosterSelect(selected){
    for(let i=0; i<selected.length; i++){
      FILTERED_PLAYERS.push(GLOBALS.players[selected[i]]);
    }
    /* ADD TO VERSION  2.0 
     * FORM: Stack config: 
     * position generated [] qb [] wr [] rb [] te [] dst
     * user created: Pick stacks
     */
      
    // filter players by position: GLOBAL.listWR etc
    // make QB+WR stacks
    // start roster loop
    // get stacks : IF < 1 : loop all ELSE stack loop
      // stack loop : IF stacks > 0 : make 2-wr stacks (excluding stacked wr)

    let rosters = buildFilteredRosters(FILTERED_PLAYERS, "optimized"); // array of objects
    const table = document.createElement("table");
    table.setAttribute("id","rosterTable");
    table.innerHTML = `
        <tr> 
          <th>pos</th>
          <th>name</th>
          <th>team</th>
          <th>game</th>
          <th>fppg</th>
          <th>salary</th>
        </tr>`;
        console.log(table);
    const app = document.getElementById("App");
    app.innerHTML = ``;
    app.append(table);
    for(let i=0; i<rosters.length; i++){
      const newRoster = new Roster(`roster-${i}`,rosters[i]);
      newRoster.temp();
      newRoster.test();
    }
    
    
  }
}