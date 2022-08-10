import withCounter from "./withCounter";

const HHoverkCounter = (props)=> {

  const {count,incrementCounter} = props;

  return (
    <div>
      <h1   onMouseOver={incrementCounter}>Clicked {count} times</h1>
    </div>
  )
}

export default withCounter(HHoverkCounter)