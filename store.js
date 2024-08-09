export const LOGO = {
  title: "sportxy",
  subject: "dfs"
};
export const QUERY = {
  site:"",
  sport: "",
  dk: "Draft King",
  fd: "Fan Duel",
  yd: "Yahoo"
}
export const CONTAINERS = {
  sites: ``
}
export const SITES = [
  {title: "draft kings", initials: "dk", status: "primary"},
  {title: "fan duel", initials: "fd", status: "secondary"},
  {title: "yahoo", initials: "yd", status: "secondary"}
];
export const SPORTS = [
  {title: "nfl", status: "primary"},
  {title: "nba", status: "available"},
  {title: "mlb", status: "available"},
  {title: "nhl", status: "disabled"},
  {title: "wnba", status: "disabled"},
  {title: "cfl", status: "disabled"}
];
export const FILTERED_PLAYERS = {
  pool: null
}
export let ROSTERS = [];
export let SAVED_ROSTERS = {
  rosters: []
};
export const SCHEDULE = {
  games: []
}
export const GAMES = {
  list: []
}