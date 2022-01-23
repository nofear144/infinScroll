import React, {useEffect, useState} from "react";

const useRef = () => {
    const firstRender = useRef(true)
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        console.log("useEffect call")
    },[])
    return (<div>
      <div>{count}</div>
     <button onClick={()=>setCount(count+1)}> add</button>
    </div>)
}
export default useRef