import { createEntryApp } from '@ut/sub-sdk'
import { useEffect, useState } from 'react'

let hostSubAppPromise: ReturnType<typeof createEntryApp> | undefined

 function initializeHostSubApp() {
  if (!hostSubAppPromise) {
    hostSubAppPromise = createEntryApp({
      name: 'sourceKey_test',
      capabilities: ['ui.actions', 'order.data'],
      getActions: () => [
        // { key: 'feedback', label: '阶段反馈' },
        // { key: 'return', label: '返单' },
        // { key: 'reassign', label: '转派' },
        // { key: 'suspend', label: '挂起' },
        // { key: 'urge', label: '追单' },
        // { key: 'terminate', label: '异常终止' },
      ],
      getOrderData: () => ({
        title: '【省分故障工单】: 西双版纳傣族自治州:景哈乡和广村发生[衍生关联]传输线路收不到光故障告警(一级告警)',
        status: 'completed',
        creator: '王伟西双版纳傣族自治州:景哈乡和广村发生[衍生关联]传输线路收不到光故障告警(一级告警)'
      }),
      onAction: (action) => {
        console.log('主应用触发了' + action.key + '事件')
      
        return { ok: true, message: action.key }
      },
      onContext: (ctx) => {
        console.log('已接收到主应用上下文:', ctx)
      },
    })
    .catch((error: unknown) => {
      hostSubAppPromise = undefined
      throw error
    })
  }

  // hostSubAppPromise?.then((app) => {
  //   app.setActions([{ key: 'feedback', label: '阶段反馈' }])
  // })

  return hostSubAppPromise
}

function UnifyMcApp_Sub() {
  const [ App, setApp ] = useState<Awaited<ReturnType<typeof createEntryApp>>>()
  useEffect(() => {
    initializeHostSubApp()
    .then((app) => setApp(app))
    .catch((error: unknown) => {
      console.error('初始化子应用会话失败:', error)
    })
  }, [])

  const onStateChange = () => {
    App?.setOrderSnap({
      title: '标题1',
      status: 'completed',
      creator: '王伟'
    })
  }

  return (
      <div className="h-[2000px] w-full bg-gray-500 rounded-2xl p-4 flex flex-col">
        <h1 className="text-center pb-4">这是McApp_Sub</h1>
        <main className="flex-1">
          <button className='py-2 px-4 bg-blue-500'
            onClick={onStateChange}
          >修改状态</button>
        </main>
      </div>
  )
}

export default UnifyMcApp_Sub
