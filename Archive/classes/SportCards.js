export class SportCards{
  #sports
  #targetID
  constructor(sports, targetID){
    this.#sports = sports;
    this.#targetID = targetID;
  }
  temp(){  
    for(let i=0; i<this.#sports.length; i++){
      let sport = this.#sports[i]; 
      const element = document.createElement("section");
      const template = `<img src="${sport.img}" alt="" id="${sport.name}" class="${sport.classList}" style="${sport.style}">`;
      element.innerHTML = template;
      // add to DOM
      const target = document.getElementById(this.#targetID);
      target.append(element);
    }
  }
  register(){
    const nfl = document.getElementById("nfl");
    const mlb = document.getElementById("mlb");
    const nba = document.getElementById("nba");
   
    nfl.addEventListener('click', function(e){
      e.preventDefault();
      const clearClass = document.querySelector(".SportCardBorder");
      clearClass.classList.toggle("SportCardBorder");
      this.classList.toggle("SportCardBorder");
    })
    mlb.addEventListener('click', function(e){
      e.preventDefault();
      const clearClass = document.querySelector(".SportCardBorder");
      clearClass.classList.toggle("SportCardBorder"); 
      this.classList.toggle("SportCardBorder");
    })
    nba.addEventListener('click', function(e){
      e.preventDefault();
      const clearClass = document.querySelector(".SportCardBorder");
      clearClass.classList.toggle("SportCardBorder"); 
      this.classList.toggle("SportCardBorder");
    })
  }
}




