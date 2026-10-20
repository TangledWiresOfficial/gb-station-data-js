import {TOCId} from "./tocs.js";
import {CategoryId} from "./categories.js";

import lines from "./data/lines.json";

/**
 * A train line
 */
export type Line = {
  /**
   * The display name of this line
   */
  displayName: string;

  /**
   * The category this line is in
   */
  category: CategoryId;

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
export const Lines = lines as Record<LineId, Line>;

export type LineId = keyof typeof lines;
export const lineIds = Object.keys(Lines) as LineId[];
