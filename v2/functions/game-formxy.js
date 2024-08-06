export function gameForm(schedule){ 
// GLOBALS

/* Generate Gm Template
* in: shedule
* fn: create Game Schedule Form
* out: game form template
*/
  let Games = [];
  let gms = `<div class="schedule">`;

  schedule.forEach(element => {
    let gmInfoArray = schedule.toSpliced();
    gmInfoArray = element["GameInfo"].split(" "); 
    let gmInfo = gmInfoArray[0]; // ie: BUF@AZ
    let atSymbol = gmInfo.indexOf("@");
    let visitor = gmInfo.substr(0, atSymbol); 
    let home = gmInfo.substr(atSymbol+1)
/**
 * NEED TO MAKE LINKS AND EVENT LISTENERS
 * CREATE LINK CLASS/ CARD CLASS
 */
    if(Games.indexOf(gmInfo) < 0){ 
      Games.push(gmInfo);
      let template = ` 
      <div class="schedule-card">
        <div class="schedule-card__game-info">
            <section class="schedule-card__teams">
              <p class="schedule-card__link">${home}</p>
              <p>V</p>
              <p class="schedule-card__link">${visitor}</p>
            </section>
            <p class="schedule-card__time">${gmInfoArray[2]}</p>
          </div>
      </div>`;
      gms = gms + `${template}`; ;
    };
  });

  gms = gms + `</div>`
  return gms;
}

// `<div class="gameContainer">
// <form action="" class="gameOptionForm" name="gameOptionForm" id="gameOptions">`;
// for(let i=0; i<schedule.length; i++){
//   let gmNum = i;
//   let gmInfoArray = schedule.toSpliced();
//   gmInfoArray = gmInfoArray[i]["GameInfo"].split(" "); 
//   let gmInfo = gmInfoArray[0]; // ie: BUF@AZ

//   /**
//    * NEED TO SEPERATER gmINFO
//    */
//   let atSymbol = gmInfo.indexOf("@");
//   let visitor = gmInfo.substr(0, atSymbol); 
//   let home = gmInfo.substr(atSymbol+1)

//   if(Games.indexOf(gmInfo) < 0){ 
//     Games.push(gmInfo);
//     let template = ` 
//     <div class="schedule">
   
//     </div>`;
//     gms = gms + `${template}`; ;
//   }else{ 
//       continue;
//   };
// }



{/* <label id="label-${gmNum}-${visitor}" for="input-gm-${gmNum}-${visitor}">
<input type="checkbox" id="input-gm-${gmNum}" name="${visitor}" value="x${visitor}">
<p>${visitor}</p>
</label>
<p>@</p>
<label id="label-${gmNum}-${home}" for="input-gm-${gmNum}-${home}">
<p>${home}</p>
<input type="checkbox" id="input-gm-${gmNum}-${home}" name="${home}" value=x${home}>
</label> */}

// gms += `   
//       <div class="game-option-submit-container" style="width: 100%; text-align: center;">
//         <input type="submit" id="game-submit" value="get player pool" class="game-option-submit">
//       </div>
//       </form>
//     </div>`;