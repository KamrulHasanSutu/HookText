import React from 'react'

function Showcount({count,title}) {
    console.log(`rendering showing ${title}`);
  return (
    <p>{title} is {count}</p>
  )
}

export default React.memo(Showcount)
// export default Showcount
