import { Shuffler } from "./Shuffler";

export const QuestionsAPI = async (Amount: number,Difficulty: Difficulty) =>{
   const API = `https://opentdb.com/api.php?amount=${Amount}&difficulty=${Difficulty}&type=multiple`;
   let result = await (await fetch(API)).json()
   return result.results.map((question: Question)=>(
   {
    ...question,
    answers: Shuffler([...question.incorrect_answers, question.correct_answer])
   }))
   
}

export enum Difficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    answers: any[];
    question: string;
    type: string;
};