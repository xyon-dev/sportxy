import { GLOBALS } from "../../store/globals.js";


export function templatePlayerList(players, title){
  
  let playerList = `
   <h2 class="player-list-title--h2">${title}</h2>
   <ul class="player-count--ul">
    <li class="player-count--li" id="QB">QB: ${qb}</li>
    <li class="player-count--li" id="RB">RB: ${rb}</li>
    <li class="player-count--li" id="WR">WR: ${wr}</li>
    <li class="player-count--li" id="TE">TE: ${te}</li>
    <li class="player-count--li" id="DST">DST: ${dst}</li>
   </ul>
   <div id="player-count-notice--div"></div> 
   <form id="playerSelectForm" name="playerSelectForm" method="post">`;
  let playerTemp = ``;
  for(let i=0; i<players.length; i++){
    let player = players[i];
    let playerName = player.name.replace(" ","-");
    let gameInfo = player.GameInfo.split(" ");
    playerTemp = playerTemp + `
    <section class="player-list--section">
      <ul class="player-list--ul">
        <li class="player-list--input">
          <label for="${i}" name="${i}">
            <input type="checkbox" id="player-${player.id}" name="${i}" value="${playerName}" onClick="positionCount('${player.position}', 'player-${player.id}', '${player.position}count')">
          </label>
        </li>
        <li class="player-list--li">${playerName}</li>
        <li class="player-list--li">${player.position}</li>
        <li class="player-list--li">${player.TeamAbbrev}</li>
        <li class="player-list--li">${gameInfo[0]}</li>
        <li class="player-list--li">$${player.salary}</li>
      </ul>
    </section>`
  }
  playerList = playerList + playerTemp;
  playerList = playerList + `<input type="submit" id="submit-player-select-form" name="player-select" value="Submit"> <form>`;
  return playerList;
}
function playerListTemplateBuilder(postion){
 switch(postion){
    case "all": return templatePlayerList(GLOBALS.players, "all players"); 
    case "qb": return templatePlayerList(GLOBALS.listQB, "QB"); 
    case "rb": return templatePlayerList(GLOBALS.listRB, "RB"); 
    case "wr": return templatePlayerList(GLOBALS.listWR, "WR"); 
    case "te": return templatePlayerList(GLOBALS.listTE, "TE"); 
    case "flex": return templatePlayerList(GLOBALS.listFLEX, "FLEX"); 
    case "dst": return templatePlayerList(GLOBALS.listDST, "DST"); 
    default: return templatePlayerList(GLOBALS.players, "all players..."); 
  }
}

export function playerListTemplateProvider(position){
  let template = playerListTemplateBuilder(position);

  return template;
}

/**
 * 
 */

