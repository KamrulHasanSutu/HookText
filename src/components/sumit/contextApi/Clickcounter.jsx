import React from 'react'

export default function Clickcounter({count,incrementCounter}) {
    return (
      <div>
        <button type='button'  onClick={incrementCounter}>clicked {count} times</button>
      </div>
    )
  }
