// src/DeviceStatusFeature.tsx
import { useState } from 'react'
import {
  createFeatureComponent,
  useFeatureApi,
  useFeatureState,
  useNotify,
  useOrderView,
} from '@ut/sub-mf'

interface DeviceStatusResult {
  deviceId: string
  online: boolean
  temperature: number
  checkedAt: number
}

async function queryDeviceStatus(orderId: string): Promise<DeviceStatusResult> {
  const response = await fetch(`/api/device/status?orderId=${encodeURIComponent(orderId)}`)

  if (!response.ok) {
    throw new Error(`设备状态查询失败：${response.status}`)
  }

  return response.json() as Promise<DeviceStatusResult>
}

function DeviceStatusView() {
  const orderView = useOrderView()
  const featureApi = useFeatureApi()
  const featureState = useFeatureState()
  const notify = useNotify()

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<DeviceStatusResult | undefined>()

  async function handleQuery() {
    if (!orderView?.ready) {
      notify.toast('工单数据还没有准备好')
      return
    }

    setLoading(true)

    try {
      const nextResult = await queryDeviceStatus(orderView.orderId)

      setResult(nextResult)

      // 上报给宿主。
      // moduleId、orderId、at 会由 SDK 自动补充。
      featureApi.reportFeature({
        kind: 'device-status',
        summary: nextResult.online ? '设备在线' : '设备离线',
        data: {
          deviceId: nextResult.deviceId,
          online: nextResult.online,
          temperature: nextResult.temperature,
          checkedAt: nextResult.checkedAt,
        },
      })

      notify.toast('设备状态查询完成')
    } catch (error) {
      const message = error instanceof Error ? error.message : '查询失败'
      notify.toast(message)
    } finally {
      setLoading(false)
    }
  }

  if (featureState.status === 'connecting') {
    return <div>正在连接宿主...</div>
  }

  if (!orderView || !orderView.ready) {
    return <div>正在等待工单数据...</div>
  }

  return (
    <section>
      <h3>设备状态</h3>

      <div>
        <div>工单号：{orderView.orderId}</div>
        <div>工单类型：{orderView.orderType}</div>
        <div>工单标题：{orderView.title ?? '未提供'}</div>
      </div>

      <button type="button" onClick={handleQuery} disabled={loading}>
        {loading ? '查询中...' : '查询设备状态'}
      </button>

      {result ? (
        <div>
          <div>设备编号：{result.deviceId}</div>
          <div>状态：{result.online ? '在线' : '离线'}</div>
          <div>温度：{result.temperature}℃</div>
        </div>
      ) : null}
    </section>
  )
}

export default createFeatureComponent({
  appName: 'device-status',
  displayName: '设备状态功能模块',
  Component: DeviceStatusView,
})