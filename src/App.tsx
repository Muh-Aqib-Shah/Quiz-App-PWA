import React, { useState } from 'react';
import './App.css';
import { QuestionCard } from './QuestionCard';
import { Difficulty, QuestionsAPI,Question } from './QuestionAPI';


function App() {
  
  const TOTAL_QUESTIONS = 10
  const OPTIONS = document.getElementsByClassName("basic")  
  
  let [loading,setLoading] = useState(true)
  let [quizStarted,setQuizStarted] = useState(false)
  let [questions,setQuestions] = useState<Question[]>([])
  let [questionNum,setQuestionNum] = useState(0)
  let [score,setScore] = useState(0)
  let [disabled,setDisabled] = useState(false)

  const startQUIZ = async() => {
    setLoading(true);
    const data = await QuestionsAPI(TOTAL_QUESTIONS,Difficulty.EASY)
    setQuestions(data)
    setLoading(false);
    setQuizStarted(true)
    setQuestionNum(0)
    setScore(0)
}
 const nextQuestion = () => {
  
  setOptions("showBasic")
  setDisabled(false)
  const q_number = questionNum + 1
  if(q_number >= TOTAL_QUESTIONS)
    setQuizStarted(false)
  else
   setQuestionNum(q_number)  
 }

  const setOptions = (choice: string) => {
   
    switch(choice){
    case "showAnswer":
      Array.from(OPTIONS).forEach(plant=>{
        if(plant.innerHTML === questions[questionNum].correct_answer)
          plant.id = "correct"
      })
      break
    case "showBasic":
      Array.from(OPTIONS).forEach((plant,index)=>{
      plant.id =  `answr-btn${index}`
      })
      break
    }
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  setDisabled(true)
   const corr = e.currentTarget.value
   console.log("VAL:",corr);
   console.log('ID:',e.currentTarget.id);
   
  if(corr === questions[questionNum].correct_answer){
    setScore(prev=>prev+1)
     e.currentTarget.id = "correct"}
  else
   e.currentTarget.id = "wrong"
   setOptions("showAnswer")

 }

  return (
    <div className="App">
     <div className='Quiz'>Quiz</div>
     {quizStarted?
     <div className='score'>Score: {score}</div>:
     <button className='strt-btn' onClick={()=>startQUIZ()}>Start</button>
     }
     {quizStarted && !loading ?
     <QuestionCard
      questionNum = {questionNum+1}
      questions = {questions[questionNum].question}
      answers={questions[questionNum].answers}
      callback={checkAnswer}
      Disabled={disabled}
      TotalQuestions={TOTAL_QUESTIONS} />:null}
     {quizStarted && disabled?
     <button className='next-btn' onClick={()=>nextQuestion()}>Next</button> : null
     } 

    </div>
  );
}

export default App;
