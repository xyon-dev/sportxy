import { QUERY } from "../../store/store.js";
import { app } from "../../main.js";
/**
 * This template is meant to be used with ContentLoop--
 * IN: data obj :: site name, site initial, checked | bool--
 * OUT: player card template with data
 */

// export function siteCard(checked, site){
// checked ? checked = "checked" : checked = "";
// return `
//   <label for="${site.initials}">
//     <input type="radio" id="${site.initials}" name="site-select" value="${site.initials}" ${checked}></label>
//     <p class="site-options__link>${site.title}</p>
//   </label>\
// `
// }
export class SiteCard{
  constructor(checked, site){
    this.site = site;
    this.checked = checked;
  }
  temp(){
    let check;
    if(this.checked == true){ 
      check = "checked"; 
    }else{ 
      check = " ";
    }
    return `
    <label for="${this.site.initials}">
      <input type="radio" id="${this.site.initials}" name="site-select" value="${this.site.initials}" ${check}>
    </label>
    <p class="site-options__link">${this.site.title}</p>
    `
  }
  register(){
    const title = this.site.initials;
    const el = document.getElementById(this.site.initials);
    el.addEventListener("click", function (e){
      QUERY.site = title;
      app.updateSearch();
    })

  }
}