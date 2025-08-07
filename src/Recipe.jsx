

import React from 'react'
import { memo } from 'react'

const Recipe = ( {ing} ) => {

  // For printing this memo is enough
  console.log("Hello From Recipe Component")

  // For printing this we need memo (in this component) + useCallback (in another component)   
  ing();
  
  return <div className='text-3xl'> Recipe </div>
}

export default memo(Recipe)




// REACT.MEMO :-
// Usememo and React.memo are same


// MEMO :-
// > Memo stops the unneccesarry rerendering of recipe component on 
//   clicking add function. It will be rendered only first time.
// > Due to this Usecallback.jsx will render but recipe.jsx wont
// > But if we pass any prop in <Recipe ing={ingredients} />
//   then it will again lead to re renderingb recipe component, 
//   while clicking on add button 