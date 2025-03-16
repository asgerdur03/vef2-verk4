
import { Question as Questions } from "@/types";
import Question from "../Question/Question";
export default function QuestionList({questions}: {questions: Questions[]}) {

    return (
        <div>
            {questions.map((question, index) => (
                <Question key={question.id} index={index} question={question}/>
            ))}   
        </div>
    );
}