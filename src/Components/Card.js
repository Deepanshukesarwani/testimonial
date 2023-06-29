import React from 'react'
import './card.css'
// import { useState } from 'react';
const Card = (props) => {
    let Data=props.data;
    // const [index,setindex]=useState(0);
    let index=props.index;
    let setindex=props.setindex;
    function clickhandler(button)
    { if(index<4)
       {
           if(button.target.textContent==="right")
           {
              //  setindex(index+1);
               setindex((prev)=>prev+1)
               console.log(index);
           }
       }else{
            setindex(0);
            console.log(index);
            }
    }

    // console.log(Data)
  return (
    <div>
        <div id="image">
            <img src={Data.image} alt="" />
        </div>
     <div id="name">
        <h1>{Data.name}</h1>
     </div>
     <div id="domain">
        <h2>{Data.job}</h2>
     </div>
     <div id="quotes">
        <p>"</p>
     </div>
     <div className="para">
        <p>{Data.text}</p>
     </div>
     <div className="quotes">
        <p>"</p>
     </div>
     <div id="Buttons">
        <div id="right">
            <button onClick={clickhandler}>right</button>
        </div>
        <div id="left">
            <button onClick={clickhandler}>Left</button>
        </div>
     </div>
    </div>
  )
}

export default Card
