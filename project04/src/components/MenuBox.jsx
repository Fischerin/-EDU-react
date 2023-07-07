import React from 'react'

const MenuBox = ({list}) => {

    const menuStyle = {
        border: '3px solid blue',
        margin : '5px',
        padding : '5px'
        
    };

  return (
    <div style ={menuStyle}>
        <img src = {list.imgSrc} alt = {list.name}>
            <p>{list.name}</p> 
            <p>{list.price}</p>
            <p>{list.content}</p>
        </img>
      
    </div>
  );
};

export default MenuBox