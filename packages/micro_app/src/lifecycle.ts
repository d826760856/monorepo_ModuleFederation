
import type WujieReact from "wujie-react";

type LifecycleOptions = Parameters<typeof WujieReact.setupApp>[0];
type WujieWindow = Window & { __WUJIE: { id: string } };

const getWujieId = (appWindow: Window) =>
  (appWindow as WujieWindow).__WUJIE.id;

const lifecycles = {
  beforeLoad: (appWindow: Window) => console.log(`${getWujieId(appWindow)} beforeLoad 生命周期`),
  beforeMount: (appWindow: Window) => console.log(`${getWujieId(appWindow)} beforeMount 生命周期`),
  afterMount: (appWindow: Window) => console.log(`${getWujieId(appWindow)} afterMount 生命周期`),
  beforeUnmount: (appWindow: Window) => console.log(`${getWujieId(appWindow)} beforeUnmount 生命周期`),
  afterUnmount: (appWindow: Window) => console.log(`${getWujieId(appWindow)} afterUnmount 生命周期`),
  activated: (appWindow: Window) => console.log(`${getWujieId(appWindow)} activated 生命周期`),
  deactivated: (appWindow: Window) => console.log(`${getWujieId(appWindow)} deactivated 生命周期`),
  loadError: (url, e) => console.log(`${url} 加载失败`, e),
} satisfies Pick<
  LifecycleOptions,
  | "beforeLoad"
  | "beforeMount"
  | "afterMount"
  | "beforeUnmount"
  | "afterUnmount"
  | "activated"
  | "deactivated"
  | "loadError"
>;

export default lifecycles;
