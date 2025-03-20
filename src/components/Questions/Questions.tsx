'use client';

import { useEffect, useState } from "react";
import { Question, Paginated} from "@/types";
import { QuestionsApi } from "@/api";
import QuestionList from "../QuestionList/QuestionList";
import styles from "./Questions.module.css";

export default function Questions({slug}: {slug: string}) {
    const [questions, setQuestions] = useState<Paginated<Question>|null>(null);

    useEffect(() => {
        async function fetchData() {
            const api = new QuestionsApi();
            //const response = await api.getQuestions();
            const response = await api.questionsByCategory(slug);

            setQuestions(response);
        }
        fetchData();
    }, [slug]);

    if (!questions) {
        return <p>Engar spurningar fundust í þessum flokki</p>;
    }
    const filteredQuestions = questions.data

    return(<QuestionList questions={filteredQuestions} />)
}


/*
    (
        <div>
            <h2>Spurningar</h2>
            <div className={styles.questions}>
                {filteredQuestions.map((question, index) => (
                <div key={index} className={styles.question}>
                    <strong>{index +1}. {question.text}</strong>
                    <div className={styles.answers}> {question.answers.map((answer, index) => (
                        <div key={index} className={styles.answer}>
                            <label htmlFor="{index}">
                                <input type="checkbox" />
                                <p>{answer.text}</p>
                            </label> 
                        </div>
                        ))}
                    </div>
                    <button onClick={show}>Senda</button>
                </div> 
            ))}
            
            </div>

        </div>
    )*/