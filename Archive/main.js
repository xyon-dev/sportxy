import { downloadRosterTxt } from "./functions/downloadRosterTXT.js";
import { App as Application } from "./App.js";
//import { Filexy } from "./functions/filexy-js/filexy.js";
export const App = new Application;

/**
 * Main - funcitons
 * ****************
 * 
 */
const dummyRosters = [ // roster 2 and 5 should be removed

  {
  AvgPointsPerGame: "32",
  GameInfo: "DAL@SF 10/08/2023 08:20PM ET",
  TeamAbbrev: "SF",
  createdAt: "0000-00-00 00:00:00",
  id: "1",
  name: "Christian McCaffrey",
  nameID: "Christian McCaffrey (30042020)",
  playerID: "30042020",
  position: "RB",
  rosterPos: "RB/FLEX",
  salary: "9400",
  updatedAt:"0000-00-00 00:00:00"
},
{
  AvgPointsPerGame: "32",
  GameInfo: "DAL@SF 10/08/2023 08:20PM ET",
  TeamAbbrev: "SF",
  createdAt: "0000-00-00 00:00:00",
  id: "1",
  name: "Deebo Samuel",
  nameID: "Deebo Samuel (30042020)",
  playerID: "30042020",
  position: "WR",
  rosterPos: "WR/FLEX",
  salary: "9400",
  updatedAt:"0000-00-00 00:00:00"
},
{
  AvgPointsPerGame: "32",
  GameInfo: "DAL@SF 10/08/2023 08:20PM ET",
  TeamAbbrev: "SF",
  createdAt: "0000-00-00 00:00:00",
  id: "1",
  name: "Brandon Aiyuk",
  nameID: "Brandon Aiyuk (30042020)",
  playerID: "30042020",
  position: "WR",
  rosterPos: "WR/FLEX",
  salary: "9400",
  updatedAt:"0000-00-00 00:00:00"
}  
];
// const file = new Filexy;
// file.pdf("hey");

// async function getlink(site, rosters){
//   const link = await downloadRosterTxt(site,rosters);
//   const downloadLinkRef = document.getElementById("download-container");
//   downloadLinkRef.innerHTML = `<a href="${link}" id="download-link" type="text/plain" download>Click to download selected rosters</a>`;
// }
// getlink("dk", dummyRosters);




/**
 * App - functions
 */
App.start();
App.register();

