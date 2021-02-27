import React, { useState } from 'react'

const UseCallbackExample = () => {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(x => x + 1)
  }
  
  return (
    <div>
      {count}
      <button
        onClick={add}
      ></button>
    </div>
  )
}

export default UseCallbackExample
