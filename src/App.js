
import './App.css';
import Start from "./component/Start/Start.js";
import Result from './component/result/Result';
import Quiz from "./component/quiz/Quiz.js"

import {useContext}  from "react"
import {QuizContext}  from "./Context/QuizHolder.js"

function App() {

  const {start , exit}   =  useContext(QuizContext)
  return (
   <>
   {
   exit === false
   ? 
   <>
    {
     start ===  true
     ?
     <Quiz/>
     :
     <Start/>
   }
   
   </>
   : <Result/>
   
   }
   </>
 
  );
}

export default App;
