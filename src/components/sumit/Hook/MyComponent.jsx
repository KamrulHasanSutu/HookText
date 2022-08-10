import { useEffect, useState } from "react"

export default function MyFComponent(){

    const [count,setCount] = useState(0);
    // const [text,setText] = useState('');
    const [date, setDate]  = useState(new Date())

    
    useEffect(()=> {
        console.log('count called');
        document.title = `CLicked ${count} times`
    },[count])
    

    useEffect(()=> {
        const interval = setInterval(tick,1000)
        console.log("settinerval called");

        return ()=> {
            console.log('comp unmount');
            clearInterval(interval)
        }
    },[]) 
    



    const addClick = () => {
        setCount((prev)=>prev +1)
    }
    const tick = () => {
        setDate(new Date())
        console.log('clock ticking');
    }


    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                {/* <textarea name="text" id="" cols="30" rows="1" value={text} onChange={(e)=> setText(e.target.value)}></textarea> */}
            </p>
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    )
}