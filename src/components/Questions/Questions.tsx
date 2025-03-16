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
            const response = await api.getQuestions();
            setQuestions(response);
        }
        fetchData();
    }, []);

    if (!questions) {
        return <p>Spurningar fannst ekki</p>;
    }

    const filteredQuestions = questions.data.filter((question) => question.category.slug === slug);
    if (filteredQuestions.length === 0) {
        return <p>Engar spurningar fannst</p>;
    }

    console.log('filteredQuestions', filteredQuestions);

    const show = () => {
        console.log('show');
    }

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