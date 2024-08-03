/**
 * in: data, class component as Comp, register: bool (has event?)
 * out: a group of data sets applied to a template
 */
export function ContentLoop(data, Comp, register){
  let content = ``;
  for(let i=0; i<data.lenght; i++){
    // pass data to component
    const Component = new Comp(data[i]);
    // component applies dat to template and is
    // added to content
    content += Component.temp();
  }
  return content;
}