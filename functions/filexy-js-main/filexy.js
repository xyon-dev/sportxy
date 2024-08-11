/**
 * takes properly formatted data and converts
 *    it into a downloadable file.
 * inputs: data to be added to file
 * param(targetElementID): target of the element that will 
 *    either be autoloaded by code or triggered by a button
 * param(autoload): bool - if true then autoload file
 */

export class Filexy{
  #targetElementID
  #autoload
  #data
  constructor(targetElementID, autoload){
    this.#targetElementID = targetElementID;
    this.#autoload = autoload;
    this.#data = data
  }
  csv(data){
    /**
     * in: array of strings representing rows
     * out: link to .csv download
     */
    const blobData = [

    ]
    const blob = new Blob(blobData, {
      type: "application/csv",
    });
    const url = URL.createObjectURL(blob);
    
    
    
    // Target component
    const dc = document.getElementById("download-container");
    const a = document.createElement('a');
    a.href = url;
    a.download = "test.csv"
    a.innerText = "download csv";
    dc.appendChild(a);
    a.click();
    console.log(url);
  }
  txt(data){
    /**
     * in: string | use \n to manually create new line
     * out: link to .txt download
     */
  }
  pdf(data){
    /**
     * in: TBD
     * out: link to .pdf download
     */
    console.log('Coming Soon: pdf files not available yet.', data);
  }

}
// const blobData = [
//   "ID,salary,position,name,GameInfo\n",
//   `${dr[0]["id"]},${dr[0]["salary"]},${dr[0]["position"]},${dr[0]["name"]},${dr[0]["GameInfo"]}\n`,
//   `${dr[1]["id"]},${dr[1]["salary"]},${dr[1]["position"]},${dr[1]["name"]},${dr[1]["GameInfo"]}\n`,
//   `${dr[2]["id"]},${dr[2]["salary"]},${dr[2]["position"]},${dr[2]["name"]},${dr[2]["GameInfo"]}\n`
// ];
// const blob = new Blob(blobData, {
//   type: "application/csv",
// });
// const url = URL.createObjectURL(blob);
// const dc = document.getElementById("download-container");
// const a = document.createElement('a');
// a.href = url;
// a.download = "test.csv"
// a.innerText = "download csv";
// dc.appendChild(a);
// a.click();
// console.log(url);