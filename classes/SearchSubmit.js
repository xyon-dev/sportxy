// import { QUERY } from "../store.js";
// import { App } from "../Main.js";
import { QUERY } from "../store.js";
export class SearchSubmit {
  constructor(id, query){
    this.site = query.site; 
    this.sport = query.sport;
    this.id = id;
  }
  id = "roster-options-submit"
  temp(){ 
    return`
      <div class="btn-submit">
        <p id="selection-memo" class="selection-memo">
          Would you like to select players from ${QUERY[QUERY.site]}'s, ${QUERY.sport} slate? If not, select a different site and sport.
        </p>      
        <button id="${this.id}" class="submit-btn">go</button>
      </div>
    `;
  };

  register(){
    console.log('search submit registered');
  };
};