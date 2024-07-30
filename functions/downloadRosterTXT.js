import { removeDuplicateRosters } from "./removeDuplicateRosters.js";
export async function downloadRosterTxt(rosters){
//let finalRosterList = removeDuplicateRosters(rosters);

let headers = {
  "method":"post",
  "body": JSON.stringify(rosters)
}
let Data;
await fetch("http://localhost/sportxy/api/backend/get-roster-txt.php", {headers})
  .then((response) => response.json())
  .then((data) => {
    Data = data; 
})
return Data; 
  // send link for file download; open download dialogue
      /* code here */
}
