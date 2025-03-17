import { Answer as AnswerType } from "@/types";
import styles from "./Answer.module.css";

export default function Answer({ answer }: { answer: AnswerType }) {
    return (
        <div className={styles.answer}>
            <label>
                <input type="checkbox" />
                <p>{answer.text}</p>
            </label>
        </div>
    );
}