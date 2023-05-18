import React, { useState } from 'react';
import { QuestionCard } from './QuestionCard';
import { Difficulty, QuestionsAPI,Question } from './QuestionAPI';
import { GlobalStyle,StyledWrapper } from './App.styles';

function App() {
  const TOTAL_QUESTIONS = 10
  const OPTIONS = document.getElementsByClassName("basic")  
  
  let [loading,setLoading] = useState<boolean>(false)
  let [quizStarted,setQuizStarted] = useState<boolean>(false)
  let [questions,setQuestions] = useState<Question[]>([])
  let [questionNum,setQuestionNum] = useState<number>(0)
  let [score,setScore] = useState<number>(0)
  let [disabled,setDisabled] = useState<boolean>(false)

  const startQUIZ = async() => {
    setQuizStarted(true)
    setLoading(true);
    const data = await QuestionsAPI(TOTAL_QUESTIONS,Difficulty.EASY)
    setQuestions(data)
    setLoading(false);
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

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
  setDisabled(true)
   const corr = event.currentTarget.value
   console.log("VAL:",corr);
   console.log('ID:',event.currentTarget.id);
   
  if(corr === questions[questionNum].correct_answer){
    setScore(prev=>prev+1)
     event.currentTarget.id = "correct"}
  else
   event.currentTarget.id = "wrong"
   setOptions("showAnswer")

 }

  return (
    <>
    <GlobalStyle />
    <StyledWrapper>
      <center>
     <span className='Quiz'>Quiz</span></center>
     {quizStarted?
     <div className='score'>Score: {score}</div>:<center>
     <button className='strt-btn' onClick={()=>{startQUIZ()}}>Start</button></center>
     }
     {loading? <center id="loadingtxt">Loading...</center>:null}
     {quizStarted && !loading ?
     <QuestionCard
      questionNum = {questionNum+1}
      questions = {questions[questionNum].question}
      answers={questions[questionNum].answers}
      callback={checkAnswer}
      Disabled={disabled}
      TotalQuestions={TOTAL_QUESTIONS} />:null}
     {quizStarted && disabled?
     <center>
     <button className='next-btn' onClick={()=>nextQuestion()}>Next</button></center> : null}
    </StyledWrapper>
    </>
  );
}

export default App;
