import { SignKeyObjectInput } from 'crypto'
import React from 'react'

type DataTypes = {
  questions: string,
  answers: string[],
  callback : any,
  questionNum: number;
  userAnswer: string;
  TotalQuestions: number;
}

export const QuestionCard: React.FC<DataTypes> = ({questions,answers,callback,questionNum,userAnswer,TotalQuestions}) => {

    return (
        <div>

        </div>
    )
}