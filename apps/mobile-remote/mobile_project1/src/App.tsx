import { useEffect, useState } from 'react'
import Input from './Input.tsx'

function App() {
    const [inputVal, setInputVal] = useState('')
    useEffect(() => {
        console.log(inputVal)
    }, [inputVal])
    return(
        <Input value={inputVal} onValChange={(val) => setInputVal(val)} ></Input>
    )
}
export default App