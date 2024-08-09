import { QUERY } from "../store/store.js";
import { app } from "../main.js";
export class SearchSubmit {
  constructor(formID, query){
    this.site = query.site;
    this.sport = query.sport;
    this.formID = formID;
  }
  id = "roster-options-submit"
  temp(){ 
    return`
      <div class="btn-submit">
        <p id="selection-memo" class="selection-memo">
          Would you like to select players from ${QUERY[this.site]}'s, ${QUERY.sport} slate? If not, select a different site and sport.
        </p>      
        <button id="${this.id}" class="submit-btn">go</button>
      </div>
    `
  };

  register(){
    const formID = this.formID;
    const form = document.getElementById(formID);
    const submitter = document.getElementById(this.id);
    submitter.addEventListener("click", function (e) {
      e.preventDefault();
      app.GameSelect(QUERY);
    })
  }
}