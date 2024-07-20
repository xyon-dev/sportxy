import { gameForm } from "./game-formxy.js";

/** */
export function viewScheduleTemplate(schedule){
  const form = gameForm(schedule);
  return form;
}