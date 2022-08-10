import React from 'react'

export default function HoverCounter({count,incrementCounter,theme,switchTheme}) {
  const style = theme === 'darkk' ?{backgroundColor:'gray',color:'#fff'} :  null;

    return (
      <div>
        <h1  onMouseOver={incrementCounter} style={style}>Hover {count} times</h1>
        <button type='button' onClick={switchTheme}>Change Theme</button>
      </div>
    )
  }

