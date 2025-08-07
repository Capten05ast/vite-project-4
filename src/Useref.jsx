

// Topics covered :-
// 1. useRef 
// 2. styled components
// 3. .env variables
// 4. Render website and dist folder
// 5. Optimization and SEO 
//    > lazy loading, suspense, fallback
//    > Pagination and Infinite Scrolling
//    > <img loading="lazy"> </img>
//    > useMemo
//    > React.memo and useCallback
//    > Lazy loading = dynamic imports 
//    > Light house extension (overall performance of website)
//    > React Helmet (helps to make website SEO friendly, read docs plz)
//    > Render website for cloud services




import React, { useEffect } from 'react'
import Recipe from './Recipe'
import { useState } from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'


// STYLED COMPONENTS :-
// PROPS :
// Here props means the attribute bg that we passed inside MyH1 tag 
// Remember, props = attributes in React. 
const MyH1 = styled.h1`
color:white;
font-size: 40px;
background-color: ${(props) => props.bg}
`

const c = "red"
const MyH2 = styled.h2({
    color: "pink", 
    fontFamily: "monospace",
    fontSize: "20px",
    backgroundColor: c
})




const Useref = () => {

    const inputRef = useRef()
    console.log(inputRef)

    // INPUTREF = QUERYSELCTOR :-
    // This will log the whole input tag, becuase it acts like querySelector, 
    // and also we have passed this ref={inputRef} in input, thats why input is logged
    const watchHandler = () => {
        // Logs whole input tag
        console.log(inputRef.current)

        if (inputRef.current.value.length < 4) {
            inputRef.current.style.borderBottom = "2px solid tomato"
        } else inputRef.current.style.borderBottom = "2px solid green"

        console.log(inputRef.current.value)
        inputRef.current.style.color = "tomato"
    }


    useEffect(() => {
        // Acts like html title tag, used for SEO 
        document.title = "Homepage | React";
    })




    return (
      <div className='py-10 px-[10%] bg-gray-800 h-screen w-screen font-thin text-white'>

        <MyH1 bg="tomato"> Lets's Learn useRef </MyH1>
        <MyH2> Its intresting </MyH2>

        <h1 className='text-2xl'>{import.meta.env.VITE_APP_TIMEPASS}</h1>


        <input 
            ref={inputRef}
            type="text" 
            className='my-7 block border-b p-2 text-2xl outline-0 bg-gray-800 text-white' 
            placeholder='enter something...'/>

        <button onClick={watchHandler} className='text-2xl'>See Value</button>
      </div>
    )
}

export default Useref




// USEREF :-
// > React suggests that yiu should use useRef in very very less quantity, or dont use.
// > useRef is document.querySelector of React
// > Why because to avoid using query Selectors we got Reacts virtual dom
//   and so directly targetting react elements is bad


// > useRef is like document.querySelector for React.
//   > Why? Because React manages the DOM through its Virtual DOM for 
//     efficiency and consistency.
//   > Directly targeting DOM elements bypasses React’s Virtual DOM, 
//     which can cause unexpected behavior, make state management 
//     harder, and reduce performance benefits.
//   > Therefore, React recommends using useRef only when necessary 
//     (e.g., managing focus, animations, third-party libraries), not as a primary way to manipulate the DOM.




// NPM RUN BUILD :-
// This command will create a dist folder, which will contain all your projects code 


// DEPLOYING REACT APP :-
// > Log in to render
// > click on create at right corner
// > choose static file (if its frontend app)
// > run the command npm build in your terminal of vs code to create a 
//   dist folder, which will contain all the code of your project except 
//   files like .env
// > Now chose the repository you wanna use for render => Vite-Project-4
// > Select publish directory = write
// > click on Add from .env and copy paste the code of .env file in it from v code
// > Click on deploy
// > Now wait till the log section prints your site is live
// > copy the url popped on render and use it chrome, Your website is deployed
