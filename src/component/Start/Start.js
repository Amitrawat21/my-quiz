import React from 'react'
import "./Start.css"
import { useContext } from 'react'
import { QuizContext } from '../../Context/QuizHolder'




const Start = () => {
    const {setStart} = useContext(QuizContext)
  return (
    <div className='start'>
        <button  style={{width : "8rem" , height : "4rem" }}   onClick = {()=>setStart(true)}>start</button>
      
    </div>
  )
}

export default Start
