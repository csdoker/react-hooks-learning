import React, { useEffect, useState } from 'react'

export default () => {
  const [state, setState] = useState({
    count: 0,
    company: 'Apple'
  })
  return (
    <div>
      {state.count}
      {state.company}
      <button
        onClick={() => {
          setState(prev => {
            return {
              company: prev.company,
              count: prev.count + 1
            }
          })
        }}
      >
        +
      </button>
    </div>
  )
}
