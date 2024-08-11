import { App as Application } from "./App.js";
import { LOGO, SITES, SPORTS, QUERY } from "./store.js";
import { SearchSubmit } from "./classes/SearchSubmit.js";
import { csvStringsArray } from "./functions/csvStringsArray.js";


// LOGO
const LogoTitle = document.getElementById("logo-title");
const LogoSubject = document.getElementById("logo-subject");
LogoTitle.innerHTML = LOGO.title;
LogoSubject.innerHTML = LOGO.subject;

// HEADER: Sites
const SiteHeader = document.getElementById("site-options");
SITES.forEach(element => {
  // create new element
  const SiteItem = document.createElement("li");
  SiteItem.id = element.initials;
  SiteItem.classList.add("site-options__link");
  if(element.status == "primary"){ 
    SiteItem.checked = true; 
    // add --selected class
    SiteItem.classList.add("site-options__link--selected");
    QUERY.site = element.initials;
  };
  SiteItem.innerHTML = element.title;
  SiteHeader.appendChild(SiteItem);
  // EVENT
  SiteItem.addEventListener('click', function () {
    const currentSelectedItem = document.querySelector(".site-options__link--selected");
    // remove selected class
    currentSelectedItem.classList.toggle("site-options__link--selected");
    // assign class to new selected element
    SiteItem.classList.toggle("site-options__link--selected");
    QUERY.site = element.initials;
    App.updateSearch();
  })
});

// HEADER: Sports
const SportsSection = document.getElementById("sport-options");
const statusClassList = {
  base: `sport-options__option`,
  disabled: `sport-options__option--disabled`,
  primary:  `sport-options__option--selected`,

}
SPORTS.forEach(element => {
// create element "p"
  const SportItem = document.createElement("p");
  // add ID
  SportItem.setAttribute("id", `${element.title}-select`);
  // add Classes
  SportItem.classList.add(statusClassList.base)
  if(element.status == "primary"){ 
    SportItem.classList.add(statusClassList.primary);
    QUERY.sport = element.title;
  }else if(element.status == "disabled"){
    SportItem.classList.add(statusClassList.disabled);
  }
  // insert html: "nfl, nba, etc"
  SportItem.innerHTML = `${element.title}`;
  // return p to site header function to be 
  // appended to site header
  SportsSection.appendChild(SportItem);
  SportItem.addEventListener("click", function (){
    const ID = element.title;
    const selected = document.querySelector(".sport-options__option--selected");
    selected.classList.toggle("sport-options__option--selected");
    SportItem.classList.toggle("sport-options__option--selected");
    QUERY.sport = ID;
    App.updateSearch();
  });
});
// INITIAL SEARCH 
    const app = document.getElementById("App");
    // const submit = new SearchSubmit("roster-options", QUERY);
    const submit = new SearchSubmit("search-submit", QUERY);
    app.innerHTML = submit.temp();
    const submitter = document.getElementById("search-submit");
    submitter.addEventListener("click", function (e) {
      e.preventDefault();
      App.GameSelect(QUERY);
    });

// APP
export const App = new Application("App");
App.start();
// const arr = [
//   {
//     AvgPointsPerGame: "32",
//     GameInfo: "DAL@SF 10/08/2023 08:20PM ET",
//     TeamAbbrev: "SF",
//     createdAt: "0000-00-00 00:00:00",
//     id: "1",
//     name: "Christian McCaffrey",
//     nameID: "Christian McCaffrey (30042020)",
//     playerID: "30042020",
//     position: "RB",
//     rosterPos: "RB/FLEX",
//     salary: "9400",
//     updatedAt: "0000-00-00 00:00:00"
//   },
//   {
//     AvgPointsPerGame: "32",
//     GameInfo: "DAL@SF 10/08/2023 08:20PM ET",
//     TeamAbbrev: "SF",
//     createdAt: "0000-00-00 00:00:00",
//     id: "2",
//     name: "Deebo Samuel",
//     nameID: "Deebo Samuel (30042020)",
//     playerID: "30042020",
//     position: "RB",
//     rosterPos: "RB/FLEX",
//     salary: "9400",
//     updatedAt: "0000-00-00 00:00:00"
//   },

// ]
// let str = csvStringsArray(arr)
// console.log(str);
