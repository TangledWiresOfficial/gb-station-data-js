import {LineId} from "./lines.js";

import stations from "./data/stations.json" with { type: "json" };

/**
 * A train station
 */
export type Station = {
  displayName: string;
  lines: LineId[];
};

/**
 * A list of all {@link Station}s
 */
export const Stations = stations as Record<keyof typeof stations, Station>;

export type StationId = keyof typeof Stations;
export const stationIds = Object.keys(Stations) as StationId[];
