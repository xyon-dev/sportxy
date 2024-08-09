import { app } from "../Main.js";
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
    <li id="${this.site.initials}" class="site-options__link">${this.site.title}</li>
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