
import { Question as QuestionType } from "@/types";
import Answers from "../Answers/Answers";

export default function Question({question, index}: {question: QuestionType, index: number}) {
    return (
        <div>
            <p>{index + 1}. {question.text}</p>
            <Answers answers={question.answers} />
            <button>Senda</button>
        </div>
    );
}