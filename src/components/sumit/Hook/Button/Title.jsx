import React from 'react'

function Title() {
    console.log("rendering title....");
  return <h2>TItle here.</h2>
}
export default React.memo(Title)
// export default Title