

import React, { useMemo } from 'react'
import { useState } from 'react'


const Usememos = () => {

  const [add, setadd] = useState(0)
  const [sub, setsub] = useState(99)


  const product = useMemo(() => {
    console.log("product function called")
    return add * 2
  }, [add])
  // Now it will only run when add is changed


  return (
    <div className='py-10 px-[10%] bg-gray-800 h-screen w-screen font-thin text-white'>

      <h1 className='text-5xl mt-10mb-5'> {product} </h1>
      <br />

      <div>
        <button onClick={() => setadd(add + 1)} className='font-bold p-2 text-3xl rounded bg-blue-500 m-2 h-12 w-10'> +  </button>
        <span className='text-5xl ml-5 font-thin'>{add}</span>
        <br />
        <br />

        <button onClick={() => setsub(sub - 1)} className='font-black p-2 text-3xl rounded bg-red-500 m-2 h-12 w-10'> -  </button>
        <span className='text-5xl ml-5 font-thin'>{sub}</span>
      </div>
    </div>
  )
}

export default Usememos




// USE MEMO ?
// Re-rendering due to change in both the state :-
// Whenever add's value changes product function gets called
// But product function is also being called when sub's value is changed
// In React, any state update causes the entire component to re-render.
// So:
// When you click + → setadd(add + 1) → re-render → product() runs.
// When you click - → setsub(sub - 1) → re-render → product() runs again even though add didn’t change.
// To avoid this we use Use memo
// > Dont use paranthesis for a function, ehile calling, when you are using usememo
// > useMemo also behaves like useEffect
// > Empty square brackets at the end of function are imp for useEffect like behaviour
// > It is similar to use effect but returns a value, thats the difference
// > It prevents the unwanted calls of a function 



