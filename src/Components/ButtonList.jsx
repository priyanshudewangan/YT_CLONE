import React from 'react'
import Buttons from './Buttons'

const list = ["All" , "Shorts" , "videos"];

const ButtonList = () => {
  return (
    <div className='flex'>
        {/* <Buttons name="All"/>
        <Buttons name="shorts"/>
        <Buttons name="videos"/> */}

        {list.map((item) => (
          <Buttons key={item} name={item} />
        ))}
        
    </div>
  )
}

export default ButtonList