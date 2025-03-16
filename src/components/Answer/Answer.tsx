import { Answer as AnswerType } from "@/types";

export default function Answer({ answer }: { answer: AnswerType }) {
    return (
        <div>
            <label>
                <input type="checkbox" />
                <p>{answer.text}</p>
            </label>
        </div>
    );
}