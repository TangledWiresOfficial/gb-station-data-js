import {LineId} from "./lines.js";

import stations from "./data/stations.json";

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
export const Stations = stations as Record<StationId, Station>;

export type StationId = keyof typeof stations;
export const stationIds = Object.keys(Stations) as StationId[];
