import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Input from './Input.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Input />
  </StrictMode>,
)
