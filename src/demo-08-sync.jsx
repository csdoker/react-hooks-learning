import React, { useEffect, useState } from 'react'

const SyncExample = () => {
  const [count, setCount] = useState(0)

  function myEffect() {
    const interval = setInterval(() => {
      console.log(count)
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }

  useEffect(myEffect, [count])

  return <div>{count}</div>
}

export default SyncExample
