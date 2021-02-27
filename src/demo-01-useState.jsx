import React, { useState } from 'react';

// const UseStateExample = () => {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       Your count: {count}
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </div>
//   )
// }

const useCount = (initialValue) => {
  const [count, setCount] = useState(initialValue)
  return [count, () => {
    setCount(count + 1)
  }]
}

const UseStateExample = () => {
  // 使用自定义hooks复用逻辑
  const [count1, addCount1] = useCount(useCount)
  const [count2, addCount2] = useCount(useCount)
  return (
    <div>
      Your count: {count1}
      Your count: {count2}
      <button onClick={() => addCount1()}>Add1</button>
      <button onClick={() => addCount2()}>Add2</button>
    </div>
  )
}

export default UseStateExample