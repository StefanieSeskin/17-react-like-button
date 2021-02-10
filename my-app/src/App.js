import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function ButtonLikes() {
  const [count, setCount] = useState(0);
  let likes = <span>&nbsp; likes</span>
  useState(()=>{
    if (count === 1) {  
    }
  })
  // if count = 1, use "like", otherwise use "likes"
  // first click use "like".  all other clicks, use likes - NO CLUE.  TOO
  //MANY HOURS SPENT AND GOOGLE SEARCHES
  return (
    <button onClick={() => setCount(count + 1)} className = 
    "likesButton">{count}{likes}</button>
  );
}



  // function Like() {
  //   const [text, setText] = useState('like')
  //   function handleClick() {
  //     setText ('likes')
  //   }
  
  //     return (
  //     <button onClick={handleClick} className = "likesButton">{text}</button>
  //   );
  // }


export default ButtonLikes;


// function ButtonLikes() {
//   const [count, setCount] = useState(0);
//   // const [text, setText] = useState('like')
//   return (
//     <button onClick={() => setCount(count + 1)} className = 
//     "likesButton">{count} like</button>
//   );
// }