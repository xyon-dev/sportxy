import { QUERY, SPORTS } from "../../store/store.js";
import { SportCard } from "../classes/SportCard.js";

const SportsHeader = `<div id="SportsHeader" class="sport-options"></div>`;
const targetID = "SportsHeader" 
function sportsHeaderContent(){
  SPORTS.forEach(element => {
    let card = new SportCard(element); 
    const header = document.getElementById(targetID);
    const el = card.temp();
    header.appendChild(el);
    if(element.status !== "disabled"){
      card.register(el.id);
    }
    if(element.status == "primary"){
      QUERY.sport = element.title;
    }
  });
}

export {SportsHeader, sportsHeaderContent};