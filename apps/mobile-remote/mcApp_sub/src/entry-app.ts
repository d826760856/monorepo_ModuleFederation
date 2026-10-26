// src/entry-app.ts
import { createEntryApp, type EntryApp } from '@ut/sub-sdk'
import type { WorkOrderContext, OrderSnapshot } from '@ut/protocol'

let context: WorkOrderContext = {}
let entryApp: EntryApp

function getSnapshot(): OrderSnapshot {
  return {
    orderId: context.orderId ?? 'ruaa',
    updatedAt: Date.now(),
    status: 'pending',
    statusText: '处理中',
    title: '这是一个工单标题',
    fields: [
      { label: '工单编号', value: '156156165' },
      { label: '处理人', value: '王伟' },
    ],
    actions: [{ key: 'accept', label: '立即接单', primary: true }],
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

  async onAction({ key }) {
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