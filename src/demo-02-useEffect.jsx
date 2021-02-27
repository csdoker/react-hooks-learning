import React, { useEffect, useState } from 'react';

function useInterval(callback, time) {
  useEffect(() => {
    const interval = setInterval(callback, time)
    return () => {
      clearInterval(interval)
    }
  }, [])
}

const UseEffectExample = () => {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log(`you clicked count ${count} times`)
  // })

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(count)
  //   }, 1000)
  // }, [])

  useInterval(() => {
    setCount(count => count + 1)
  }, 1000)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default UseEffectExample