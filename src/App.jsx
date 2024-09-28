import { useState } from "react"

function App() {
const [num, setNum] = useState(0);



const add = () => {
  setNum(num + 1);
}

const subtrac = () => {
  if(num > 0) {
    setNum(num - 1);

  }
}

  return <div style={{width: 400, margin: 'auto', }}>
  <div>Current Num is {num}</div>

<div>
  <button onClick={subtrac}>Subtract</button>
  <button onClick={add}>Add</button>

</div>

  </div>
}


export default App