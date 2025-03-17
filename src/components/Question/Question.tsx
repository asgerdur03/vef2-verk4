
import { Question as QuestionType } from "@/types";
import Answers from "../Answers/Answers";

import styles from "./Question.module.css";

export default function Question({question, index}: {question: QuestionType, index: number}) {
    return (
        <div className={styles.question}>
            <p className={styles.questionText}>{index + 1}. {question.text}</p>
            <Answers answers={question.answers} />
            <button>Senda</button>
        </div>
    );
}