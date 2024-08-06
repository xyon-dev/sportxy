export class GameFilter{
  #classes
  constructor(classes){
    this.#classes = classes;
  }
  ClassList(){
    let classList = "";
    this.#classes.forEach(element => {
      classList += element;
      classList += " ";
    });
    return classList;
  }
  temp(){
    return `
      <p id="game-filter" class="${this.ClassList()}">
        games
      </p>
    `
  }
}