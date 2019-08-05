import {Mode} from "../models/mode";

export const REGEX_MODES: Mode[] = [
  {type: 1, title: "Match mode"},
  {type: 2, title: "Find mode"},
  {type: 3, title: "Replace mode"},
];

export const MODE_IDS = {
  MATCH_MODE: 1,
  FIND_MODE: 2,
  REPLACE_MODE: 3,
};
