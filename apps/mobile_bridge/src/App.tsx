// ./src/App.tsx
import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Mobile_project2App } from './remotes/mp2';


// 宿主应用首页组件
const HomePage = () => (
  <div style={{ padding: '20px' }}>
    <h1>宿主应用首页</h1>
    <p>这是宿主应用的首页内容</p>
  </div>
);

const App = () => {
  const mp2ref = useRef(null)
  useEffect(() => {
    console.log(mp2ref.current);
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/remote1/*"
          // 使用 Remote1App 组件, 将会被懒加载
          Component={() => (
            <Mobile_project2App
              basename="/remote1"
              style={{ color: 'red' }}
              // name 和 age 为远程组件 props, 将自动透传到远程组件
              title={'222'}
              // 可设置 ref, 将自动转发到远程组件，可获取 ref 对象操作 dom
              ref={mp2ref}
            />
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;