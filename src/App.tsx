import React, { useState } from 'react';
import './App.css';
import { QuestionCard } from './QuestionCard';

function App() {
  let [quizStarted,setQuizStarted] = useState(false)
  let [questions,setQuestions] = useState()
  let [answers,setAnswers] = useState()
  let [useranswer,setUseranswer] = useState()
  let [disabled,setDisabled] = useState()
  return (
    <div className="App">
     <div className='Quiz'>Quiz</div>
     {quizStarted?
     <div className='score'>Score: 5</div>:
     <button className='strt-btn' onClick={()=>setQuizStarted(true)}>Start</button>
     }
     <QuestionCard />
    </div>
  );
}

export default App;
