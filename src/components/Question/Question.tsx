'use client';	
import { Question as QuestionType, Answer } from "@/types";
import { useState } from "react";

import styles from "./Question.module.css";


export default function Question({question, index}: {question: QuestionType, index: number}) {
    const [showAnswers, setShowAnswers] = useState(false);

    const handleCheckAnswers = () => {
        setShowAnswers((prev) => !prev); // Toggle check mode
    };
    
    return(
        <div className={styles.question}>
            <p className={styles.questionText}>{index + 1}. {question.text}</p>

            <ul className={styles.answers}>
                {question.answers.map((answer: Answer, i: number) => (
                    <li key={i} className={`${styles.answer} ${showAnswers ? (answer.correct ? styles.correct : styles.wrong) : ""}`}>
                        <input type="checkbox" /> {answer.text}
                    </li>
                ))}
            </ul>

            <button onClick={handleCheckAnswers}>
                {showAnswers ? "Reset" : "Check Answers"}
            </button>
        </div>
    )
    
}