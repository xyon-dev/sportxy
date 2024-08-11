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
export const SELECTED_PLAYERS = {
  pool: []
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
};
export const ROSTER_DATA = {
  cart: 0,
  schedule: null,
  salaryCap: 0,
  rosterOptions: [],
  players: [],
  listQB: [],
  listRB: [],
  listWR: [],
  listTE: [],
  listFLEX: [],
  listDST: [],
  playerCount:{
    QB:0,
    RB:0,
    WR:0,
    TE:0,
    DST:0
  }
};
export const FINAL_ROSTERS = {
  rosters: []
}