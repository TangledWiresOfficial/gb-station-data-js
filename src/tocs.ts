import tocs from "./data/tocs.json";

export type TOC = {
  displayName: string;
  colour: string;
};

export const TOCs = tocs as Record<keyof typeof tocs, TOC>;

export type TOCId = keyof typeof TOCs;
export const tocIds = Object.keys(TOCs) as TOCId[];
