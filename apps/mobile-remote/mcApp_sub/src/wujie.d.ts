export {}

interface WujieEventMap {
  sendSubMessage: { text: string }
  sendHostMessage: { text: string }
}

interface WujieBus {
  $on<K extends keyof WujieEventMap>(
    eventName: K,
    callback: (params: WujieEventMap[K]) => void,
  ): void
  $emit<K extends keyof WujieEventMap>(
    eventName: K,
    payload: WujieEventMap[K],
  ): void
}

declare global {
  interface Window {
    $wujie?: {
      bus: WujieBus
    }
  }
}