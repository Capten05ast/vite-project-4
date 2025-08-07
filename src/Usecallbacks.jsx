

import React from 'react'
import { useState } from 'react'
import Recipe from './Recipe'
import { useCallback } from 'react'

const useCallbacks = () => {
  const [add, setadd] = useState(0)  
  const [sub, setsub] = useState(99)


  const ingredients = useCallback(() => {
    console.log("Recipe Ingredients Here")
  }, [sub])
  // ingredients run only when changes occurs in sub


  return (
    <div className='py-10 px-[10%] bg-gray-800 h-screen w-screen font-thin text-white'>

      <div>
        <button onClick={() => setadd(add + 1)} className='font-bold p-2 text-3xl rounded bg-blue-500 m-2 h-12 w-10'> +  </button>
        <span className='text-5xl ml-5 font-thin'>{add}</span>
        <br />

        <button onClick={() => setsub(sub - 1)} className='font-black p-2 text-3xl rounded bg-red-500 m-2 h-12 w-10'> -  </button>
        <span className='text-5xl ml-5 font-thin'>{sub}</span>
      </div>

      <Recipe ing={ingredients} />

    </div>
  )
}

export default useCallbacks




// USERCALLBACK :-
// > Rerendering :
//   When we click on add then it re renders the function present inside
//   Recipe component
// > memo :
//   before using useCallback in UseCallbacks.jsx you must use
//   export default memo(Recipe), to avoid unneed renders of recipe.jsx 
//   functions
// > useCallback :
//   But now if we will pass the props inside <Recipe ing={ingredients}/>
//   thats why now with memo we will also use useCallback




// USECALLBACK v/s USEMEMO :-
// useCallback is used when we are working on 2 components
// useMemo is used when we are working inside single component itself