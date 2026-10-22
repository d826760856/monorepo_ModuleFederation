import { createEntryApp } from '@ut/sub-sdk'
import { useEffect } from 'react'

let hostSubAppPromise: ReturnType<typeof createEntryApp> | undefined

function initializeHostSubApp() {
  if (!hostSubAppPromise) {
    hostSubAppPromise = createEntryApp({
      name: 'sourceKey_test',
      capabilities: ['ui.actions'],
      getActions: () => [
        { key: 'feedback', label: '阶段反馈' },
        { key: 'return', label: '返单' },
        { key: 'reassign', label: '转派' },
        { key: 'suspend', label: '挂起' },
        { key: 'urge', label: '追单' },
        { key: 'terminate', label: '异常终止' },
      ],
      onAction: (action) => {
        console.log('主应用触发了' + action.key + '事件')
      
        return { ok: true, message: action.key }
      },
      onContext: (ctx) => {
        console.log('已接收到主应用上下文:', ctx)
      },
    }).catch((error: unknown) => {
      hostSubAppPromise = undefined
      throw error
    })
  }

  return hostSubAppPromise
}

function UnifyMcApp_Sub() {
  useEffect(() => {
    void initializeHostSubApp().catch((error: unknown) => {
      console.error('初始化子应用会话失败:', error)
    })
  }, [])

  return (
      <div className="h-[2000px] w-full bg-gray-500 rounded-2xl p-4 flex flex-col">
        <h1 className="text-center pb-4">这是McApp_Sub</h1>
        <main className="flex-1">
        </main>
      </div>
  )
}

export default UnifyMcApp_Sub
