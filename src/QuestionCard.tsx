import React from 'react'

type DataTypes = {
  questions: string,
  answers: string[],
  callback : any,
  questionNum: number;
  Disabled: boolean;
  TotalQuestions: number;
}

export const QuestionCard: React.FC<DataTypes> = ({questions,answers,callback,questionNum,Disabled,TotalQuestions}) => {

   return (
      <>
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
        </>       
    )
}