import React from 'react'
import { Wrapper } from './QuestionCard.styles';

type DataTypes = {
  quizStarted: boolean,
  score: number;
  questions: string,
  answers: string[],
  callback : any,
  questionNum: number;
  Disabled: boolean;
  TotalQuestions: number;
}

export const QuestionCard: React.FC<DataTypes> = ({quizStarted,score,questions,answers,callback,questionNum,Disabled,TotalQuestions}) => {

   return (
      <Wrapper>
     <div className='Quiz'>Quiz</div>
     {quizStarted?
     <div className='score'>Score: {score}</div>:
     <button className='strt-btn' onClick={()=>{}}>Start</button>
     }
      <div className='quest-container'>
        <div className='quest-box'>
          <div className='quest-status'>Question: {questionNum}/{TotalQuestions}</div>
          <div className='quest' dangerouslySetInnerHTML={{__html:questions}} ></div>
          <div id="options-box" className='answer-box' >
            {
              answers.map((answer,index) =>(
                <button key={index} id= {`answr-btn${index}`} className="basic" value={answer} onClick={callback} disabled={Disabled} dangerouslySetInnerHTML={{__html:answer}} />
              ))
            }
          </div>

        </div>
        </div>
        </Wrapper>
    )
}