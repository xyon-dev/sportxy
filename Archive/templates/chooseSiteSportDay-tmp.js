export function chooseSiteSportDayTemplate(){
  const template = `<form action="" method="post" id="selectSiteForm">
       <p>NFL: select site</p>
       <label for="dk">draft kings</label>
       <input type="radio" name="site" value ="dk" id="siteDraftKing">
       <label for="fd">fan duel</label>
       <input type="radio" name="site" value ="fd" id="siteFanDuel">
       <label for="yf">yahoo fantasy</label>
       <input type="radio" name="site" value="yf" id="siteYahooFantasy">
       <div>
        <p>Choose FLEX postions <span>(optional)</span>: </p>
        <label for="flexRB">RB</label>
        <input type="checkbox" name="flexRB" value="RB" id="flexPosRB">
        <label for="flexWR">WR</label>
        <input type="checkbox" name="flexWR" value="WR" id="flexPosWR">
        <label for="flexTE">TE</label>
        <input type="checkbox" name="flexTE" value="TE" id="flexPosTE">
       </div>
       <input type="submit" id="submit-select-site" value="Submit">
     </form>`
  return template;
};

