
import type WujieReact from "wujie-react";
export type LifecycleOptions = Parameters<typeof WujieReact.setupApp>[0];
export type WujieWindow = Window & { __WUJIE: { id: string } };
export type Plugins = LifecycleOptions["plugins"]