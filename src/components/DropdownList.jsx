import { useState } from "react"

export const DropdownList = () => {
// state (0-скрыт, 1-раскрыт)
const list = ['Profile Information','Change Password','Become PRO','Help','Log Out'];
const [stateItem,setStateItem] = useState(list[0]);
let index = 0;
return (
  <>
<ul data-id="dropdown" className="dropdown">
  {
    list.map(item => 
      <li className={stateItem==item ? 'active' : ''}>
        <a href="#" onClick={()=>{setStateItem(item)}}>{item}</a>
      </li>
    )
  }
</ul>
  </>
)
}