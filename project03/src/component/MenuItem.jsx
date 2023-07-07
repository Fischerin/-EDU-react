import React from 'react'

const MenuItem = (props) => {
    console.log('props', props.menu);
  return (
    <div>
        <div>
        <p>{props.name}</p>
        <p>{props.menu}</p>
        <p>7500원</p>
        </div>
        <div>
        <p>뭔가요?</p>
        </div>
    </div>
  )
}

export default MenuItem
