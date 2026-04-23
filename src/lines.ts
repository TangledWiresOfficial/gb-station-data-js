import {TOCId} from "./tocs.js";

import lines from "./data/lines.json" with { type: "json" };

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
export const Lines = lines as Record<keyof typeof lines, Line>;

export type LineId = keyof typeof Lines;
export const lineIds = Object.keys(Lines) as LineId[];