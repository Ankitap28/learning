import React, {useState} from 'react'

function UseStateHook() {
     const [count, setCount] = useState(0)
  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>Count : {count}</button> in this previous state is not stored */ }
      <button onClick={() => setCount(prevCount=> prevCount + 1)}>Count : {count}</button>
    </div>
  );
}

export default UseStateHook