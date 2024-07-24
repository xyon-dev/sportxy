export let GLOBALS = {
  site: "",
  sport:"",
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
    qb:0,
    rb:0,
    wr:0,
    te:0,
    dst:0
  }
};
export let ROSTERS = [];
export const ROSTER_TEST ={ 
    q:{
      AvgPointsPerGame
      : 
      "22",
      GameInfo
      : 
      "KC@MIN 10/08/2023 04:25PM ET",
      TeamAbbrev
      : 
      "KC",
      createdAt
      : 
      "0000-00-00 00:00:00",
      id
      : 
      "6",
      name
      : 
      "Patrick Mahomes",
      nameID
      : 
      "Patrick Mahomes (30041930)",
      playerID
      : 
      "30041930",
      position
      : 
      "QB",
      rosterPos
      : 
      "QB",
      salary
      : 
      "8200",
      updatedAt
      : 
      "0000-00-00 00:00:00"
    },
   r1: {
      AvgPointsPerGame
      : 
      "32",
      GameInfo
      : 
      "DAL@SF 10/08/2023 08:20PM ET",
      TeamAbbrev
      : 
      "SF",
      createdAt
      : 
      "0000-00-00 00:00:00",
      id
      : 
      "1",
      name
      : 
      "Christian McCaffrey",
      nameID
      : 
      "Christian McCaffrey (30042020)",
      playerID
      : 
      "30042020",
      position
      : 
      "RB",
      rosterPos
      : 
      "RB/FLEX",
      salary
      : 
      "9400",
      updatedAt
      : 
      "0000-00-00 00:00:00"
    },
   r2:{
      AvgPointsPerGame
      : 
      "18",
      GameInfo
      : 
      "NYG@MIA 10/08/2023 01:00PM ET",
      TeamAbbrev
      : 
      "NYG",
      createdAt
      : 
      "0000-00-00 00:00:00",
      id
      : 
      "8",
      name
      : 
      "Saquon Barkley",
      nameID
      : 
      "Saquon Barkley (30042022)",
      playerID
      : 
      "30042022",
      position
      : 
      "RB",
      rosterPos
      : 
      "RB/FLEX",
      salary
      : 
      "8100",
      updatedAt
      : 
      "0000-00-00 00:00:00"
    },
   w1: {
      AvgPointsPerGame
      : 
      "28",
      GameInfo
      : 
      "KC@MIN 10/08/2023 04:25PM ET",
      TeamAbbrev
      : 
      "MIN",
      createdAt
      : 
      "0000-00-00 00:00:00",
      id
      : 
      "2",
      name
      : 
      "Justin Jefferson",
      nameID
      : 
      "Justin Jefferson (30042350)",
      playerID
      : 
      "30042350",
      position
      : 
      "WR",
      rosterPos
      : 
      "WR/FLEX",
      salary
      : 
      "9400",
      updatedAt
      : 
      "0000-00-00 00:00:00"
    },
   w2:{
      AvgPointsPerGame
      : 
      "27",
      GameInfo
      : 
      "NYG@MIA 10/08/2023 01:00PM ET",
      TeamAbbrev
      : 
      "MIA",
      createdAt
      : 
      "0000-00-00 00:00:00",
      id
      : 
      "3",
      name
      : 
      "Tyreek Hill",
      nameID
      : 
      "Tyreek Hill (30042352)",
      playerID
      : 
      "30042352",
      position
      : 
      "WR",
      rosterPos
      : 
      "WR/FLEX",
      salary
      : 
      "9000",
      updatedAt
      : 
      "0000-00-00 00:00:00"
    },
   w3:{
      AvgPointsPerGame
      : 
      "0",
      GameInfo
      : 
      "PHI@LAR 10/08/2023 04:05PM ET",
      TeamAbbrev
      : 
      "LAR",
      createdAt
      : 
      "0000-00-00 00:00:00",
      id
      : 
      "4",
      name
      : 
      "Cooper Kupp",
      nameID
      : 
      "Cooper Kupp (30042354)",
      playerID
      : 
      "30042354",
      position
      : 
      "WR",
      rosterPos
      : 
      "WR/FLEX",
      salary
      : 
      "8600",
      updatedAt
      : 
      "0000-00-00 00:00:00"
    },
   t:{
    AvgPointsPerGame
    : 
    "15",
    GameInfo
    : 
    "KC@MIN 10/08/2023 04:25PM ET",
    TeamAbbrev
    : 
    "KC",
    createdAt
    : 
    "0000-00-00 00:00:00",
    id
    : 
    "18",
    name
    : 
    "Travis Kelce",
    nameID
    : 
    "Travis Kelce (30042876)",
    playerID
    : 
    "30042876",
    position
    : 
    "TE",
    rosterPos
    : 
    "TE/FLEX",
    salary
    : 
    "7600",
    updatedAt
    : 
    "0000-00-00 00:00:00"
    },
   f:{
      AvgPointsPerGame
      : 
      "23",
      GameInfo
      : 
      "GB@LV 10/09/2023 08:15PM ET",
      TeamAbbrev
      : 
      "LV",
      createdAt
      : 
      "0000-00-00 00:00:00",
      id
      : 
      "9",
      name
      : 
      "Davante Adams",
      nameID
      : 
      "Davante Adams (30042358)",
      playerID
      : 
      "30042358",
      position
      : 
      "WR",
      rosterPos
      : 
      "WR/FLEX",
      salary
      : 
      "8100",
      updatedAt
      : 
      "0000-00-00 00:00:00"
    },
   d:{
      AvgPointsPerGame
      : 
      "6",
      GameInfo
      : 
      "CAR@DET 10/08/2023 01:00PM ET",
      TeamAbbrev
      : 
      "CAR",
      createdAt
      : 
      "0000-00-00 00:00:00",
      id
      : 
      "695",
      name
      : 
      "Panthers",
      nameID
      : 
      "Panthers  (30043202)",
      playerID
      : 
      "30043202",
      position
      : 
      "DST",
      rosterPos
      : 
      "DST",
      salary
      : 
      "2200",
      updatedAt
      : 
      "0000-00-00 00:00:00"
    }
  }