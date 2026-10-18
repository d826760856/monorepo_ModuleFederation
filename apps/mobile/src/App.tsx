import './App.scss'
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
      <div className="centerBox">
        <Input value={inputVal} onValChange={(val) => setInputVal(val)} />
        <Button />
        <McApp></McApp>
      </div>
    </div>
  )
}

export default App
