import React, { useState } from 'react'

function Calculator() {
  const [num1,setnum1]=useState("")
  const [num2,setnum2]=useState("")
  const a=Number(num1);
  const b=Number(num2);
  return (
    <div>
      <h1 style={{textDecoration:"underline"}}>Calculator</h1>
      <input type="number" placeholder='enter the first value'
      onChange={(e)=>setnum1(e.target.value)}/>
      <input type="number" placeholder='enter the second value'
      onChange={(e)=>setnum2(e.target.value)}/>
      <center><div style={{height:"140",
      width:"200px",
      border:"1px solid",
      marginleft:"500px",
      marginTop:"20px",
      backgroundColor:"lightblue"}}>
        <p><strong>Addition:</strong>{a+b}</p>
        <p><strong>Subtraction:</strong>{a-b}</p>
        <p><strong>Multiplication:</strong>{a*b}</p>
        <p><strong>Divison:</strong>{a/b}</p>
      </div></center>
    </div>
  )
}
export default Calculator;