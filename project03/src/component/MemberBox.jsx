import React from 'react'


const MemberBox = ({name, gender, song}) => {
    // console.log('intro', intro.name);
  return (
    <div>
        <div>
            <p>이름: {name}</p>
            <p>성별: {gender}</p>
            <p>노래 : {song}</p>
            <hr/> 
            {/* 줄 긋기 <hr/> */}
         </div>
    </div>
  )
}

export default MemberBox
