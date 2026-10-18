import './App.css'
import { Input } from 'mobile_project1'
import { Button } from '@monorepo_test/todo'
import { useState, useEffect } from 'react'
import { McApp } from '@monorepo_test/micro_app'

function App() {
  const [inputVal, setInputVal] = useState('')
  useEffect(() => {
        console.log(inputVal)
    }, [inputVal])
  return (
    <div className='mobile_container'>
      <div className="centerBox w-40 h-[60rem] bg-amber-300 flex items-center">
        <div className='bg-blue-500 w-40 h-[80%] scrollbar-none overflow-scroll'>
          <Input value={inputVal} onValChange={(val) => setInputVal(val)} />
          <Button/>
          <McApp></McApp>
        </div>
      </div>
    </div>
  )
}

export default App
