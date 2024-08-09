// class - has temp, data will be passed on call
//import {Roster} from '.../'   
import { ROSTERS } from "../store/globals";
// import {contentLoop}

/**
 * in: page data, page template, content loop
 * out: page template
 */
export function rosterViewGenerator(targetID){
  if(ROSTERS){
    //....tells what element to append new elements to.
    let view = document.getElementById(targetID);
    //....data loop : adds new elements to page one at a time
    for(i=0; i<ROSTERS.length; i++){
    //....newClassMember
      const newRoster = new Roster(`roster-${i}`,{ 
        q: ROSTERS[i]["qb"],
        r1: ROSTERS[i]["rb1"],
        r2: ROSTERS[i]["rb2"],
        w1: ROSTERS[i]["wr1"],
        w2: ROSTERS[i]["wr2"],
        w3: ROSTERS[i]["wr3"],
        t:ROSTERS[i]["te"],
        f: ROSTERS[i]["flex"],
        d: ROSTERS[i]["dst"]
      });
      //....newRosterTemp
      let newRosterTemp = newRoster.temp();
      //....new element
      let div = document.createElement("section");
      //....innerHTML
      div.innerHTML = newRosterTemp;
      //....view.append
      view.append(div);
      // add event listener
      newRoster.register();
    }
  }else{
    console.log("ERROR: could not retrieve rosters");
  }
return 0;
}




