import { Card } from "./Card.js";

export class siteSelectForm {
  #sites;
  constructor(sites){
    this.#sites = sites;
  }
  temp(){
      let cardTemp = ``
      for(i=0; i<this.#sites; i++){
        let newCard = new Card(this.#sites[i]);
        newCardTemp = newCard.temp();
        cardTemp += newCardTemp;
      }
      return `
      <form id="selectSiteForm">
        <div>${cardTemp}</div>
        <input type ="submit" name="site-submit" id="submit-site-select">
      </form>
      `;
  }
  register(){
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
    });    
  }
}