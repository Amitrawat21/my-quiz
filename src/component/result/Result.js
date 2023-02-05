import React , {useContext} from 'react'
import { QuizContext } from '../../Context/QuizHolder'

export default function Result() {
    

        const {correct , setExit  , setStart , quizzes } = useContext(QuizContext)

        const playagain = ()=>{

            setExit(false)
            setStart(false)

        }
  return (
    <div className='result'>
        <h2>{correct} are correct out of {quizzes.length}</h2>
        <button onClick={playagain}>playagain</button>
      
    </div>
  )
}
