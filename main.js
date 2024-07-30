import { downloadRosterTxt } from "./functions/downloadRosterTXT.js";
import { App as Application } from "./App.js";
export const App = new Application;

/**
 * Main - funcitons
 * ****************
 * 
 */
const dummyRosters = [ // roster 2 and 5 should be removed
{
  id: 1,
  salary: 100,
  name: {
    first: 'roster',
    last: 'one'
  },
  wr1: 'jim',
  wr2: 'jon',
  wr3: 'james',
  flex: 'jimmy'
},
{
  id: 2,
  salary: 110,
  wr1: 'kree',
  wr2: 'khonur',
  wr3: 'khem',
  flex: 'kaizar'
},
{
  id: 3,
  salary: 100,
  wr1: 'jim',
  wr2: 'jon',
  wr3: 'james',
  flex: 'jimmy'
},
{
  id: 4,
  salary: 500,
  wr1: 'cris',
  wr2: 'cross',
  wr3: 'crit',
  flex: 'curse'
}, 
{
  id: 5,
  salary: 100,
  wr1: 'durk',
  wr2: 'don',
  wr3: 'dustin',
  flex: 'danny'
},
{
  id: 6,
  salary: 500,
  wr1: 'cris',
  wr2: 'cross',
  wr3: 'crit',
  flex: 'curse'
}, 
];
const rosters = await downloadRosterTxt(dummyRosters);
console.log(rosters);




/**
 * App - functions
 */
// App.start();
// App.register();

