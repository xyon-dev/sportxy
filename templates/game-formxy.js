export function gameForm(target, schedule){ 
// GLOBALS

/* Generate Gm Template
* in: form data
* fn: create object
* out: form data as object -> fetch function
*/
  let gms = `<form action="" name="formxy" id="formxy" method="post">`;
  for(let i=0; i<schedule.length; i++){
    let gmNum = i;
    let gmInfoArray = schedule.toSpliced();
    gmInfoArray = gmInfoArray[i]["GameInfo"].split(" "); 
    let gmInfo = gmInfoArray[0]; 
    let template = `<div>
      <label id="label-${gmNum}" for="gm-${gmNum}" class=""><section>${gmInfo}</section></label>
      <input id="input-gm-${gmNum}" name="${schedule[i]["GameInfo"]}" type="checkbox"></input>
    </div>`;
    gms = gms + `${template}`; ;
  }
  gms += `<!-- submit -->  
  <input type="submit" name="get-data" value="get data" onclick="" id="btn-get-data" class="btn-submit">
  </form>`;
  //main.innerHTML = gms;
 
  return gms;
}  
