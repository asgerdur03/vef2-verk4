'use client'

import { use, useState } from "react";
import { Answer, Question as QuestionType, Category, AnswerToCreate , QuestionToCreate} from "@/types";
import { JSX } from "react";
import { QuestionsApi } from "@/api";
import { useEffect } from "react";
import { json } from "stream/consumers";

export default function QuestionForm(){
    const [questionText, setQuestionText] = useState('');
    const [categoryId, setCategoryId] = useState<number>();
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
       setAnswers(answers.map((ans, i) => ({ ...ans, correct: i === index }))); // Only one correct answer
    };

    const handleSubmit =async(e: React.FormEvent) => {
        e.preventDefault();

        const data: QuestionToCreate = {
            text: questionText,
            categoryId: categoryId,
            answers: answers
        };

        console.log('data', data);
        const api = new QuestionsApi();
        console.log(JSON.stringify(data));
        await api.createQuestion(data);

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
                <option value="" disabled>Select a category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
        <label className="block mt-2 font-semibold">Answers:</label>

        {answers.map((answer, index) => (
        <div key={index} className="flex items-center mt-2">
          <label className="mr-2">Svarmöguleiki {index + 1}</label>
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
        
        <button type="submit">Submit</button>
    </form>
    </div>


    )
}


/*
<p>Spurning verður að hafa 4 svarmöguleika, og amk eitt rétt svar</p>
        <div>
            <label>Svarmöguleiki 1</label>
            <input type="text" name="svar1" required/>
            <input type="checkbox" name="correct" value="1"/>
        </div>
        <div>
            <label>Svarmöguleiki 2</label>
            <input type="text" name="svar2" required/>
            <input type="checkbox" name="correct" value="2"/>
        </div>
        <div>
            <label>Svarmöguleiki 3</label>
            <input type="text" name="svar3" required/>
            <input type="checkbox" name="correct" value="3"/>
        </div>
        <div>
            <label>Svarmöguleiki 4</label>
            <input type="text" name="svar4" required/>
            <input type="checkbox" name="correct" value="4"/>
        </div>

*/