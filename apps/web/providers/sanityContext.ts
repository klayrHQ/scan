import { createContext } from "react";
import { DefineListenerContext } from "./types";
import { NoStoreContext } from "./noStore";

export const defineListenerContext =
  createContext<DefineListenerContext>(NoStoreContext);
