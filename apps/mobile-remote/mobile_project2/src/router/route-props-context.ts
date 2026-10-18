import { createContext } from "react";
import type { RoutePropsMap } from "./route-props";

export const RoutePropsContext = createContext<Partial<RoutePropsMap>>({});