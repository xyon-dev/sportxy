import { gameForm } from "./game-formxy.js";

/** */
export function viewScheduleTemplate(schedule){
  const form = gameForm("x", schedule);
  return form;
}