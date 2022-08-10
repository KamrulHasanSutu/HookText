import withCounter from "./withCounter";

const HClickCounter = (props)=> {

  const {count,incrementCounter} = props;

  return (
    <div>
      <button type='button'  onClick={incrementCounter}>Clicked {count} times</button>
    </div>
  )
}

export default withCounter(HClickCounter)