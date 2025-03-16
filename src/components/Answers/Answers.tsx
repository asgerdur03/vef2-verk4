import Answer from "../Answer/Answer";
import { Answer as AnswerType } from "@/types";
export default function Answers({answers}: {answers: AnswerType[]}) {
    return (
        <div>
            {answers.map((answer) => (
                <Answer key={answer.id} answer={answer}/>))}
        </div>
    );
}