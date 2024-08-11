/**
 * IN: array of objects (objects of objects)
 * OUT: array of strings havings
 * data from object
 * FORMAT: [
 *  "heading, heading, heading, ..., \n",
 *  "data, data, data, ....., \n",
 *  "data, data, data, ....., \n",
 *  "data, data, data, ....., \n"
 * ]
 */
let testArray = [
{
  fname: "t",
  lname: "h",
  age: 4
},
{
  fname: "k",
  lname: "h",
  age: "2"
}
];
function objKeysToString(obj){
  const keys = Object.keys(obj);
  let str = ``;
  for(let i=0; i<keys.length; i++){
    str +=`${keys[i]},`
  }
  str += `\n`
  return str;
}
function objValuesToString(obj){
  // get values
  let str = ``;
  let values = Object.values(obj);
  for(let i=0; i<values.length; i++){ 
    // write to string
    str += `${values[i]},`;
  }
  // add new line character
  str += `\n`;
  // return new string
  return str;
}
export function csvStringsArray(arr, pos){
  let CSVArray = [];
  // get object keys for headings string
  let KeyString = objKeysToString(arr[0][pos]);
  CSVArray.push(KeyString);
  // loop through array, writing data to template literal
  for(let i=0; i<arr.length; i++){
    // Stringify ARRAY indexes (object of objects) 
    let indexKeys = Object.keys(arr[i]);
    for(let j=0; j<indexKeys.length; j++){
      let str = objValuesToString(arr[i][indexKeys[j]]);
      CSVArray.push(str);
    }
    //add to output array
    CSVArray.push("\n");
  }
  // return CSV array
  return CSVArray;  
}