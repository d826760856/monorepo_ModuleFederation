// src/entry-app.ts
import { createEntryApp, type EntryApp, type EntryOrderSnapshot } from '@ut/sub-sdk'
import type { WorkOrderContext, OrderSnapshot } from '@ut/protocol'

import { MOBILE_DEFAULT_ACTIONS_BY_STATUS, type ActionKey } from '@ut/sub-sdk'
let context: WorkOrderContext = {}
let entryApp: EntryApp

function getSnapshot(): EntryOrderSnapshot {
  return {
    orderId: context.orderId ?? 'ruaa',
    updatedAt: Date.now(),
    status: 'pending',
    title: '这是一个工单标题',
    creator: '王伟',
    actions: [{ key: 'accept', label: '立即接单' }],
  }
}

entryApp = createEntryApp({
  appName: 'guanghua-rru',
  capabilities: ['order.data', 'order.stream', 'lifecycle', 'notify'],

  getOrderSnapshot: getSnapshot,

  onContextChange(nextContext) {
    context = { ...context, ...nextContext }
    console.log('context', context)
  },

  async onAction({ key }: { key: ActionKey }) {

    if (key !== 'accept') {
      return { ok: false, message: `不支持的操作：${key}` }
    }

    entryApp.notify.toast({ message: '接单成功', level: 'success' })
    entryApp.pushOrderData(getSnapshot())
    return { ok: true }
  },

  onRefresh() {
    entryApp.pushOrderData(getSnapshot())
  },

  onStateChange(state) {
    console.info('[sub-sdk]', state.status, state.reason)
  },
  onError(error) {
    console.error('[sub-sdk] 通信异常', error)
  },
})

export { entryApp }