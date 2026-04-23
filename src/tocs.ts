import tocs from "./data/tocs.json";

export type TOC = {
  displayName: string;
  colour: string;
};

export const TOCs = tocs as Record<TOCId, TOC>;

export type TOCId = keyof typeof tocs;
export const tocIds = Object.keys(TOCs) as TOCId[];
