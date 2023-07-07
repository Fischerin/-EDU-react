import React, { useState } from 'react'

const Ex07Child = ({changeData}) => {

    const[inputTxt, setInputTxt] = useState('')



  return (
    <div>
      <p>이곳은 하위컴포넌트입니다.{inputTxt} </p>
      <input type = 'text' 
      onChange={(e)=>{setInputTxt(e.target.value)}}
      ></input>


      <button onClick={()=>{changeData(inputTxt)}}>값 보내기!</button>
    </div>
  )
}

export default Ex07Child
