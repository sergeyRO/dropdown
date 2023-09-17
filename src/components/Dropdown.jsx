import { useState } from "react"
import { DropdownList} from './DropdownList'

export const Dropdown = () => {
  // state (0-скрыт, 1-раскрыт)
  const [state,setState] = useState(0);
  return (
    <>
  <div data-id="wrapper" className={`dropdown-wrapper${state ? ' open' : ''}`}>
      <button data-id="toggle" className="btn" onClick={() => {state==0 ? setState(1) : setState(0)}}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList /> 
  </div>
    </>
  )
}