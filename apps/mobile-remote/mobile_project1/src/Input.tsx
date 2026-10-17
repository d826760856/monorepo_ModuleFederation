import './Input.scss'

type InputProps = {
  value: string
  onValChange: (val: string) => void
}

function Input(props: InputProps) {
  const { value, onValChange } = props

  return (
    <div className="mobile_project1_container">
      <div className='InputContainer'>
        <span>你好这是mobile_project1</span>
        <span>你好这是mobile_project1</span>
        <span>你好这是mobile_project1</span>
        <span>你好这是mobile_project1</span>
        <input value={value} onChange={(evt) => onValChange(evt.target.value)}></input>
      </div>
    </div>
  )
}

export default Input
