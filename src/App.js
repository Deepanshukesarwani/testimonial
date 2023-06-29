import React, { useState } from "react";
import Card from './Components/Card'
import data from './data'
const App = () => {
const [index,setindex]=useState(0);
  return (
    <div>
      <h1>OUR TESTIMONIAL</h1>
    
      <Card data={data[index]} index={index} setindex={setindex}/>
      
    </div>
  )

};

export default App;
