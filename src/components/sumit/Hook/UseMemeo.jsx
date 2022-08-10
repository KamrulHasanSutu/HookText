import React, { useCallback, useState, useMemo } from 'react'
import Title from './Button/Title'
import Button from './Button/Button'
import Showcount from './Button/Showcount'

export default function UseMemeo() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const incrementOne = useCallback(() => {
        setCount1((prev) => prev + 1)
    }, [])
    const incrementFive = useCallback(() => {
        setCount2((prev) => prev + 5)
    }, [])
    const isEvenOrOdd = useMemo(() => {
        let i =0;
        while(i<100000000) i+=1; // costly operation
        return count1 % 2 === 0
    },[count1])

    return (
        <div><h2>UseMemeo</h2>

            <Title />
            <hr></hr>
            <Showcount count={count1} title="count 1" />
            <span>{isEvenOrOdd? 'Even' : 'oDD' }</span>
            <Button handleClick={incrementOne}> Increment By 1</Button>
            <hr></hr>
            <Showcount count={count2} title="count 2" />
            <Button handleClick={incrementFive} > Increment By 5</Button>
        </div>

    )
}
