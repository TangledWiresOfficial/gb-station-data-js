import {TOCId, TOCs} from "./toc";

/**
 * A train line
 */
export type Line = {
  /**
   * The display name of this line
   */
  displayName: string;

  /**
   * The brand colour of this line
   */
  colour: string;

  /**
   * A list of {@link TOC}s that operate this line
   */
  tocs: TOCId[];
};

/**
 * A list of all {@link Line}s
 */
export const Lines = {
  // London Underground lines
  bakerloo: {
    displayName: "Bakerloo Line",
    colour: "#a45a2a",
    tocs: ["tfl"],
  },
  central: {
    displayName: "Central Line",
    colour: "#da291c",
    tocs: ["tfl"],
  },
  circle: {
    displayName: "Circle Line",
    colour: "#ffcd00",
    tocs: ["tfl"],
  },
  district: {
    displayName: "District Line",
    colour: "#007a33",
    tocs: ["tfl"],
  },
  hammersmithAndCity: {
    displayName: "Hammersmith & City Line",
    colour: "#e89cae",
    tocs: ["tfl"],
  },
  jubilee: {
    displayName: "Jubilee Line",
    colour: "#7c878e",
    tocs: ["tfl"],
  },
  metropolitan: {
    displayName: "Metropolitan Line",
    colour: "#840b55",
    tocs: ["tfl"],
  },
  northern: {
    displayName: "Northern Line",
    colour: "#000000",
    tocs: ["tfl"],
  },
  piccadilly: {
    displayName: "Piccadilly Line",
    colour: "#10069f",
    tocs: ["tfl"],
  },
  victoria: {
    displayName: "Victoria Line",
    colour: "#00a3e0",
    tocs: ["tfl"],
  },
  waterlooAndCity: {
    displayName: "Waterloo & City Line",
    colour: "#6eceb2",
    tocs: ["tfl"],
  },

  // Other TfL services

  elizabeth: {
    displayName: "Elizabeth Line",
    colour: "#6950a1",
    tocs: ["tfl"],
  },
  dlr: {
    displayName: "DLR",
    colour: "#00afad",
    tocs: ["tfl"],
  },
  londonTrams: {
    displayName: "London Trams",
    colour: "#5fb526",
    tocs: ["tfl"],
  },
  cableCar: {
    displayName: "IFS Cloud Cable Car",
    colour: "#734fa0",
    tocs: ["tfl"],
  },

  // London Overground lines

  liberty: {
    displayName: "Liberty Line",
    colour: "#5d6061",
    tocs: ["londonOverground"],
  },
  lioness: {
    displayName: "Lioness Line",
    colour: "#faa61a",
    tocs: ["londonOverground"],
  },
  mildmay: {
    displayName: "Mildmay Line",
    colour: "#0077ad",
    tocs: ["londonOverground"],
  },
  suffragette: {
    displayName: "Suffragette Line",
    colour: "#5bb972",
    tocs: ["londonOverground"],
  },
  weaver: {
    displayName: "Weaver Line",
    colour: "#823a62",
    tocs: ["londonOverground"],
  },
  windrush: {
    displayName: "Windrush Line",
    colour: "#ed1b00",
    tocs: ["londonOverground"],
  },

  // Other TOCs
  avantiWestCoast: {
    displayName: TOCs.avantiWestCoast.displayName,
    colour: TOCs.avantiWestCoast.colour,
    tocs: ["avantiWestCoast"],
  },
  c2c: {
    displayName: TOCs.c2c.displayName,
    colour: TOCs.c2c.colour,
    tocs: ["c2c"],
  },
  csLowlander: {
    displayName: "Lowlander Sleeper",
    colour: "#b26734",
    tocs: ["caledonianSleeper"],
  },
  csHighlander: {
    displayName: "Highlander Sleeper",
    colour: "#006984",
    tocs: ["caledonianSleeper"],
  },
  chiltern: {
    displayName: "Chiltern Railways",
    colour: TOCs.chiltern.colour,
    tocs: ["chiltern"],
  },
  crossCountry: {
    displayName: TOCs.crossCountry.displayName,
    colour: TOCs.crossCountry.colour,
    tocs: ["crossCountry"],
  },
  eastMidlandsRailway: {
    displayName: TOCs.eastMidlandsRailway.displayName,
    colour: TOCs.eastMidlandsRailway.colour,
    tocs: ["eastMidlandsRailway"],
  },
  gatwickExpress: {
    displayName: "Gatwick Express",
    colour: "#eb1e2d",
    tocs: ["goviaThameslinkRailway"],
  },
  grandCentral: {
    displayName: TOCs.grandCentral.displayName,
    colour: TOCs.grandCentral.colour,
    tocs: ["grandCentral"],
  },
  greatNorthern: {
    displayName: "Great Northern",
    colour: "#00ABE6",
    tocs: ["goviaThameslinkRailway"],
  },
  greatWesternRailway: {
    displayName: TOCs.greatWesternRailway.displayName,
    colour: TOCs.greatWesternRailway.colour,
    tocs: ["greatWesternRailway"],
  },
  greaterAnglia: {
    displayName: TOCs.greaterAnglia.displayName,
    colour: TOCs.greaterAnglia.colour,
    tocs: ["greaterAnglia"],
  },
  heathrowExpress: {
    displayName: TOCs.heathrowExpress.displayName,
    colour: TOCs.heathrowExpress.colour,
    tocs: ["heathrowExpress"],
  },
  hullTrains: {
    displayName: TOCs.hullTrains.displayName,
    colour: TOCs.hullTrains.colour,
    tocs: ["hullTrains"],
  },
  islandLineTrains: {
    displayName: "Island Line",
    colour: "#1e90ff",
    tocs: ["southWesternRailway"],
  },  
  londonNorthEasternRailway: {
    displayName: TOCs.londonNorthEasternRailway.displayName,
    colour: TOCs.londonNorthEasternRailway.colour,
    tocs: ["londonNorthEasternRailway"],
  },
  londonNorthwesternRailway: {
    displayName: "London Northwestern Railway",
    colour: "#00bf6f",
    tocs: ["westMidlandsTrains"],
  },
  lumo: {
    displayName: TOCs.lumo.displayName,
    colour: TOCs.lumo.colour,
    tocs: ["lumo"],
  },
  northernTrains: {
    displayName: TOCs.northernTrains.displayName,
    colour: TOCs.northernTrains.colour,
    tocs: ["northernTrains"],
  },
  scotRail: {
    displayName: TOCs.scotRail.displayName,
    colour: TOCs.scotRail.colour,
    tocs: ["scotRail"],
  },
  southWesternRailway: {
    displayName: TOCs.southWesternRailway.displayName,
    colour: TOCs.southWesternRailway.colour,
    tocs: ["southWesternRailway"],
  },
  southeastern: {
    displayName: TOCs.southeastern.displayName,
    colour: TOCs.southeastern.colour,
    tocs: ["southeastern"],
  },
  southeasternHighSpeed: {
    displayName: "Southeastern High Speed",
    colour: "#1e1e50",
    tocs: ["southeastern"],
  },
  southern: {
    displayName: "Southern",
    colour: "#8cc63e",
    tocs: ["goviaThameslinkRailway"],
  },
  stanstedExpress: {
    displayName: "Stansted Express",
    colour: "#6b717a",
    tocs: ["greaterAnglia"],
  },
  thameslink: {
    displayName: "Thameslink",
    colour: "#ff5aa4",
    tocs: ["goviaThameslinkRailway"],
  },
  transPennineExpress: {
    displayName: TOCs.transPennineExpress.displayName,
    colour: TOCs.transPennineExpress.colour,
    tocs: ["transPennineExpress"],
  },
  transportForWales: {
    displayName: TOCs.transportForWales.displayName,
    colour: TOCs.transportForWales.colour,
    tocs: ["transportForWales"],
  },
  westMidlandsRailway: {
    displayName: "West Midlands Railway",
    colour: "#ff8300",
    tocs: ["westMidlandsTrains"],
  },
  
  // other metro systems
  blackpoolTramway: {
    displayName: TOCs.blackpoolTramway.displayName,
    colour: TOCs.blackpoolTramway.colour,
    tocs: ["blackpoolTramway"],
  },
  edinburghTrams: {
    displayName: TOCs.edinburghTrams.displayName,
    colour: TOCs.edinburghTrams.colour,
    tocs: ["edinburghTrams"],
  },
  glasgowSubway: {
    displayName: TOCs.glasgowSubway.displayName,
    colour: TOCs.glasgowSubway.colour,
    tocs: ["glasgowSubway"],
  },
  lutonDart: {
    displayName: TOCs.lutonDart.displayName,
    colour: TOCs.lutonDart.colour,
    tocs: ["lutonDart"],
  },
} as const satisfies Record<string, Line>;

export type LineId = keyof typeof Lines;
export const lineIds = Object.keys(Lines) as LineId[];
