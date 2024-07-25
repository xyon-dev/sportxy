import { App } from "../main.js";
import { SiteCards } from "./SiteCards.js";
import { SportCards } from "./SportCards.js";
import { SPORTS } from "../store/globals.js";
import { GLOBALS } from "../store/globals.js";
/**
 * inserts form for site slection and sport selection
 * in: site cards component, sports cards component
 * out: form template
 * action: calls game schedule, sets: GLOBAL.site, GLOBAL.sport 
 */
export class siteSelectForm {
  #sites;
  constructor(sites){
    this.#sites = sites;
  }
  temp(elemID){ 
      const containerID = "SportsCardsContainer"
      let sportsCardSection = new SportCards(SPORTS, containerID)
      const siteCards = new SiteCards;
      const siteCardsTemplate = siteCards.temp();
      const targetElement = document.getElementById(elemID);
      targetElement.innerHTML = `
        <form id="selectSiteForm">
          <div class="site-card-container">${siteCardsTemplate}</div>
          <div id="SportsCardsContainer" class="sports-card-container"></div>
          <div class="site-select-submit-container">
          <input type ="submit" name="site-submit" id="submit-slect" class="site-select-form-submit">
          </div>
        </form>
      `;
      // add cards to DOM
      sportsCardSection.temp();
      sportsCardSection.register();
  }
  register(){
    const SelectForm = document.getElementById("selectSiteForm");
    SelectForm.addEventListener('submit', function(e){
      e.preventDefault();
      let selectDataObject={
        site:"",
        sport:""
      };
      const sport = SelectForm.querySelector(".SportCardBorder");
      const sportID = sport["id"];   
      const submitter = document.getElementById("submit-site-select");
      const formData = new FormData(SelectForm, submitter);
      for(const value of formData.values()){
        selectDataObject.site = value;
      }
      selectDataObject.sport = sportID; 
      GLOBALS.site = selectDataObject.site;
      GLOBALS.sport = selectDataObject.sport;
      App.GameSelect(selectDataObject);
    });    
  }
}