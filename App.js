import { GameSchedule } from "./classes/GameSchedule.js";
import { siteSelectForm } from "./classes/SiteSelectForm.js";
import { Players } from "./classes/Players.js";
import { SITES } from "./store/globals.js";
import { Players2 } from "./classes/Players2.js";

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
    await playerList.temp();playerList.register();
  }
  RosterSelect(){
    //
  }
}