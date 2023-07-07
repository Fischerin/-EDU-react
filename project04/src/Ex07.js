import React, { useState } from 'react'
import Ex07Child from './components/Ex07Child'

const Ex07 = () => {


    const [data, setData]=useState('')

    //금고 역할~
    // 자식 컴포넌트가 부모 컴포넌트로 직접 줄 수 없어서
    // 자식이 와서 데이터를 두고갈 수 있을만 한 공간을 만들어두는 것!
    const changeData = (txt) =>{
        console.log('changeData Function', txt);
        setData(txt)
    }

  return (
    <div>
      <h3>상위 컴포넌트</h3>
      <p>{data}</p>

      <hr/>
      <Ex07Child changeData={changeData}/>
    </div>
  )
}

export default Ex07
