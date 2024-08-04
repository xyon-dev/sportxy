import { siteCard } from "./site-card.js";
import { SITES } from "../../store/store.js";
import { ContentLoop } from "../../../v3/ContentLoop.js";


export const SitesHeader = `
<form class="site-select bebas-neue-regular" id="roster-options" action="">
  <ul id="site-options" class="site-options"></ul>
</form>`;
export function sitesHeaderContent(){ 
  const parent = document.getElementById("site-options");
  SITES.forEach(element => {
    let card;
    if(element.status == "primary"){
      card = siteCard(true, element);
    }else{
      card = siteCard(false, element);
    }
    const el = document.createElement("li");
    el.classList.add("site-options__option");
    el.innerHTML = card;
    parent.appendChild(el);
  });
}