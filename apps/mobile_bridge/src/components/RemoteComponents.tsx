// ./src/components/RemoteComponents.tsx
// import React from 'react';

// 加载状态组件
export const LoadingComponent = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <div>远程应用加载中...</div>
  </div>
);

// 错误回退组件
export const ErrorFallback = ({ error }: { error: Error }) => (
  <div style={{ padding: '20px', border: '1px solid #ff6b6b', borderRadius: '8px' }}>
    <h3>远程应用加载失败</h3>
    <p>错误详情: {error.message}</p>
    <button onClick={() => window.location.reload()}>
      重新加载页面
    </button>
  </div>
);