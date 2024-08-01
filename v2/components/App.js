export class App{
  #id
  constructor(id){
    this.#id = id;
  }
  start(){
    const AppElement = document.getElementById(this.#id);
    AppElement.innerHTML = `<h1>App</h1>`;
  }
  register(){
    console.log("app register");
  }
}