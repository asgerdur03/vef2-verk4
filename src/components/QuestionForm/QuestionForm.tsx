'use client'

import { useState } from "react";
import { Category, AnswerToCreate , QuestionToCreate} from "@/types";
import { QuestionsApi } from "@/api";
import { useEffect } from "react";

export default function QuestionForm(){
    const [questionText, setQuestionText] = useState('');
    const [categoryId, setCategoryId] = useState<number>(0);
    const [categories, setCategories] = useState<Category[]>([]);

    const [answers, setAnswers] = useState<AnswerToCreate[]>([
        {text: '', correct: false },
        {text: '', correct: false },
        {text: '', correct: false },
        {text: '', correct: false },
    ]);


    useEffect(() => {
        async function fetchCategories() {
            const api = new QuestionsApi();
            const response = await api.getCategories();
            setCategories(response?.data || []);
            
        }
        fetchCategories();
    }, []);

    const handleAnswerChange = (index: number, text: string) => {
        setAnswers(answers.map((ans, i) => (i === index ? { ...ans, text } : ans)));
    };
    
    const handleCorrectAnswerChange = (index: number) => {
        setAnswers(answers.map((ans, i) => ({ ...ans, correct: i === index })));
    };

    const handleSubmit =async(e: React.FormEvent) => {
        e.preventDefault();
        const api = new QuestionsApi();

        // error responses
        if (questionText.length < 3 || questionText.length > 1024) {	
            alert('Spurninginn verður að vera með minnsta kosti 3 og meira en 1024 stafir');
            return;
        }

        if (answers.some((answer) => answer.text.length < 3 || answer.text.length > 1024)) {
            alert('Svarmöguleikinn verður að vera með minnsta kosti 3 og meira en 1024 stafir');
            return;
        }

        if (answers.every((answer) => !answer.correct)) {
            alert('Veldu rétt svar');
            return;
        }

        if (categoryId === 0) {
            alert('Veldu flokk');
            return;
        }

        const data: QuestionToCreate = {
            text: questionText,
            categoryId: categoryId,
            answers: answers
        };


        await api.createQuestion(data);

        alert('Spurninginn hefur verið bætt við');

    };

    return (
        <div>
        <h1>QuestionForm</h1>

        <form onSubmit={handleSubmit}>
        <div>
            <label >Spurning</label>
            <input value= {questionText} type="text" onChange={(e) => setQuestionText(e.target.value)} required />
        </div>
        <div className="flokkur">
            <label>Flokkur </label>
            <select value={categoryId} onChange={(e) => setCategoryId(parseInt(e.target.value))} required>
                <option value="0" disabled>Select a category</option>

                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
        <label>Answers:</label>

        {answers.map((answer, index) => (
        <div key={index}>
            <label>Svarmöguleiki {index + 1}</label>
            <input
            type="text"
            value={answer.text}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            className="w-full p-2 border rounded"
            placeholder={`Answer ${index + 1}`}
            />
            <input
            type="radio"
            name="correctAnswer"
            checked={answer.correct}
            onChange={() => handleCorrectAnswerChange(index)}
            className="ml-2"
            />
            <span className="ml-1">Correct</span>
        </div>
        ))}
        
        <button type="submit">Búa til spurningu</button>
    </form>
    </div>

    )
}
