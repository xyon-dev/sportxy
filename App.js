import { GameSchedule } from "./classes/GameSchedule.js";
import { siteSelectForm } from "./classes/SiteSelectForm.js";
import { SITES } from "./store/globals.js";

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
  PlayerSelect(games){
    console.log(games);
  }
  RosterSelect(){
    //
  }
}