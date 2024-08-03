class SportCard {
  #sport
  constructor(sport){
    // object with keys: title, status 
    // status == selected | available | disabled
    this.#sport = sport;
  }
  temp(){
    const statusClassList = {
      available: `sport-options__option`,
      disabled: `sport-options__option sport-options__option--disabled`,
      primary:  `sport-options__option sport-options__option--selected`
    }
      return `
      <p id="${this.#sport.title}-select" class="${statusClassList[this.#sport.status]}">${this.#sport}</p>
      `
  }
  register(){
    const p = document.createElement("p");
    p.innerHTML = temp(this.#sport);
    p.addEventListener("click", function (e) {
      const selected = document.querySelector(".sort-options__option--selected");
      selected.toggleclass(".sort-options__option--selected");
      p.toggleclass("sort-options__option--selected");
    })
  }
}  


{/* <p class="sport-options__option sport-options__option--selected">nfl</p>
            <p class="sport-options__option">nba</p>
            <p class="sport-options__option">mlb</p>
            <p class="sport-options__option sport-options__option--disabled">nhl</p>
            <p class="sport-options__option sport-options__option--disabled">wnba</p>
            <p class="sport-options__option sport-options__option--disabled">cfl</p> */}