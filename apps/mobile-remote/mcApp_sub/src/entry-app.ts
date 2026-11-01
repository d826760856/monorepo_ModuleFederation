// src/pages/detail/DetailPage.tsx
import {
  createEntryApp,
  type DetailApp,
  type EntryOrderSnapshot,
} from '@ut/sub-sdk'
import { type WorkOrderContext } from '@ut/protocol'

// 业务项目自己的接口封装
// import { api } from '../../api'

const getSnapshot = (context: WorkOrderContext): EntryOrderSnapshot => {
  return {
    orderId: context.orderId ?? 'ruaa',
    updatedAt: Date.now(),
    status: 'todo',
    title: '这是一个标题',
    creator: '王伟',
  }
}
let entryApp: DetailApp

entryApp = createEntryApp({
  appName: 'guanghua-rru',

  // 宿主调用 order.get 时传入当前工单上下文。
  // 首屏工单号直接使用这个参数，不依赖 app.context 或 URL。
  getOrderSnapshot: (context): EntryOrderSnapshot => {
    if (!context.orderId) {
      throw new Error('缺少工单号')
    }

    const order = getSnapshot(context)
    return {
      orderId: order.orderId,
      updatedAt: Date.now(),
      status: order.status,
      title: order.title,
      creator: order.creator,
      actions: order.actions,
    }
  },

  // action 是宿主下发的按钮，context 是当前工单上下文。
  async onAction({ key, args }, context) {
    if (!context.orderId) {
      return { ok: false, message: '缺少工单号' }
    }
    return { ok: true, message:`${key} 操作成功` }
  },

  onContextChange(context) {
    // 切换工单或保活恢复时，按新的 orderId 刷新页面数据。
    console.info('[detail] context changed', context)
  },

  onRefresh(context) {
    if (context.orderId) {
      entryApp.pushOrderData(getSnapshot(context))
    }
  },

  onPause() {
    // 停止轮询、WebSocket 等后台任务。
  },

  onResume() {
    // 恢复后台任务，并按 instance.context?.orderId 重新加载。
  },

  onDestroy() {
    // 清理定时器、取消订阅、关闭业务连接。
  },

  onStateChange(state) {
    console.info('[sub-sdk]', state.status, state.reason)
  },

  onError(error) {
    console.error('[sub-sdk] 链路异常', error)
  },
})

export { entryApp }