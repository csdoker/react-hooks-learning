import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
  const [count, setCount] = useState(0)
  const memorizedText = useMemo(() => {
    console.log('run useMemo function')
    return `this is a memorized text ${Date.now()}`
  }, [Math.floor(count / 10)])
  // const memorizedText = `this is a memorized text ${Date.now()}`
  return (
    <div>
      {memorizedText}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default UseMemoExample
