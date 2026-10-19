import './App.css'
// import { Input } from 'mobile_project1'
// import { Button } from '@monorepo_test/todo'
import { useState, useEffect } from 'react'
import { McApp, EvtTestPage } from '@monorepo_test/micro_app'


function App() {
  const [inputVal, setInputVal] = useState('')
  useEffect(() => {
        console.log(inputVal)
    }, [inputVal])
  return (
    <div className='w-full h-full bg-mauve-900 text-white flex flex-col'>
      <header className='w-full h-15 text-3xl text-center leading-14'>这是mobile主应用</header>
      <main className='flex flex-col w-full items-center flex-1'>
        <section className='h-80 w-[80%] mb-3 bg-gray-500 rounded-2xl'>
          <EvtTestPage/>
        </section>
        <McApp className='bg-gray-700 w-[80%] h-[90%] rounded-2xl p-4 flex flex-col'></McApp>
      </main>
    </div>
  )
}

export default App
