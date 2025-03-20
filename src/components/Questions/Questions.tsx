'use client';

import { useEffect, useState } from "react";
import { Question, Paginated} from "@/types";
import { QuestionsApi } from "@/api";
import QuestionList from "../QuestionList/QuestionList";
import { UiState } from "@/types";

export default function Questions({slug}: {slug: string}) {
    const [uiState, setUiState] = useState<UiState>('initial');
    const [questions, setQuestions] = useState<Paginated<Question>|null>(null);

    useEffect(() => {
        async function fetchData() {
            setUiState('loading');
            const api = new QuestionsApi();
            //const response = await api.getQuestions();
            const response = await api.questionsByCategory(slug);

            if (!response) {
                setUiState('error');
            }
            else {
                setUiState('data');
            }

            setQuestions(response);
        }
        fetchData();
    }, [slug]);

    if (!questions?.data) {
        return <p>Engar spurningar fundust í þessum flokki</p>;
    }
    const filteredQuestions = questions.data

    return(
        <div>
            {uiState === 'loading' && <p>Sæki Spurningar</p>}
            {uiState === 'error' && <p>Villa við að sækja spurningar</p>}
            {uiState === 'data' && (
                <QuestionList questions={filteredQuestions} />
            )}
        </div>
    
    )
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