import { Mobile_project2App } from './remotes/mp2';
// import type { Input } from '@mf-types/mobile_project2/export-app' 
function App() {
  return(
    <>
    <div>这是首页</div>
      <Mobile_project2App
        // basename="/remote1"
        memoryRoute={{ entryPath: '/Input' }}
        style={{ color: 'red' }}
        // name 和 age 为远程组件 props, 将自动透传到远程组件
        // routeProps={{ input: { title: '232322' } }}
        // routeProps={{ input: { title: '151563' } }}
        props={{ input: { title: '1213' } }}
        // 可设置 ref, 将自动转发到远程组件，可获取 ref 对象操作 dom
        // ref={mp2ref}
      />
    </>
  )
}
export default App