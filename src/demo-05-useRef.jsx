import React, { useRef, useState } from 'react'

// const UseRefExample = () => {
//   const refInput = useRef()
//   return (
//     <div>
//       <input type='text' ref={refInput} />
//       <button
//         onClick={() => {
//           refInput.current.focus()
//         }}
//       >
//         Focus
//       </button>
//     </div>
//   )
// }

const UseRefExample = () => {
  const [counter, setCounter] = useState(0)
  const prev = useRef(null)
  return (
    <div>
      <p>当前值：{counter}</p>
      <p>之前的值：{prev.current}</p>
      <button onClick={() => {
        prev.current = counter
        setCounter(x => x + 1)
      }}>Click me to add</button>
      <button onClick={() => {
        prev.current = counter
        setCounter(x => x - 1)
      }}>Click me to remove</button>
    </div>
  )
}

export default UseRefExample
