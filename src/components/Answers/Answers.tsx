import Answer from "../Answer/Answer";
import { Answer as AnswerType } from "@/types";
import styles from "./Answers.module.css";
export default function Answers({answers}: {answers: AnswerType[]}) {
    return (
        <div className={styles.answers}>
            {answers.map((answer) => (
                <Answer key={answer.id} answer={answer}/>))}
        </div>
    );
}