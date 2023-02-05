import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../../Context/QuizHolder'
import "./Quiz.css"

 export  default  function Quiz() {
    const[current , setcurrent] = useState(0)

 

  return (
   
    <div className='quiz'>
        
        <Box  current = {current}  next = {setcurrent}/>
     
    </div>
  )
}

const Box = ({current , next})=>{

    const {quizzes , correct , setCorrect , setExit }  = useContext(QuizContext);
    const [ans , setAns] = useState("")

    const saveHandler = ()=>{

        if(quizzes[current].correct === ans){
            setCorrect(correct + 1)
        }

        setAns("")
     if((current + 1) == quizzes.length){
        setExit(true)
     }

     else{
        next(current + 1)
     }

    }

    useEffect(()=>{
        saveHandler()
    }, [])
//     const color = {
//         backgroundColor: "blue",
//         color : 'white'
//     }
//    const constfixColor = ()=>{
//     ans == "a" ? style = {color} : ""

//   }

    return(
<div  className='box'>

    <div  className  ='innerBox'>{current + 1 + ")"}{quizzes[current].question}</div>
    <div  className ='col'>
     <div style={{backgroundColor : ans == "a"? 'blue' : ''}} className ="item"  onClick={()=>setAns("a")}>{quizzes[current].a}</div>
     <div style={{backgroundColor : ans == "b"? 'blue' : ""}} className ='item'  onClick={()=>setAns("b")}>{quizzes[current].b}</div>
     <div style={{backgroundColor : ans == "c"? 'blue' : ""}} className ='item' onClick={()=>setAns("c")}>{quizzes[current].c}</div>
     <div style={{backgroundColor : ans == "d"? 'blue' : ""}} className ='item' onClick={()=>setAns("d")} >{quizzes[current].d}</div>

     

    </div>
    <div   className='lowerBox'>
   <div className='lowerList'  style = {{backgroundColor : "red"}}  onClick = {()=>setAns("")}>Reset</div>
   <div className='lowerList' style = {{backgroundColor : "blue"}}  onClick = {saveHandler}> save & Next</div>
   <div className='lowerList' style = {{backgroundColor : "green"}}  onClick = {()=>setExit(true)}>exit</div>

    </div>
    <h3>total correct answer{correct}</h3>
</div>


    )
}


