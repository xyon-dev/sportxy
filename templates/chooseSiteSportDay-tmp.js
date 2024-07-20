export function chooseSiteSportDayTemplate(){
  const template = `<form action="" method="post" id="selectSiteForm">
       <p>NFL: select site</p>
       <label for="dk">draft kings</label>
       <input type="checkbox" name="dk" id="siteDraftKing">
       <label for="fd">fan duel</label>
       <input type="checkbox" name="fd" id="siteFanDuel">
       <label for="yf">yahoo fantasy</label>
       <input type="checkbox" name="yf" id="siteYahooFantasy">
       <input type="submit" id="submit-select-site" value="Submit">
     </form>`
  return template;
};

