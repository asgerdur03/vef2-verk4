import QuestionForm from "@/components/QuestionForm/QuestionForm";
import Edit from "../../components/Edit/Edit";
import styles from "./../page.module.css";


export default function Home() {
    return (
        <div className={styles.main}>
            <h1>Create new question </h1>
            <QuestionForm/>

        </div>
    );

}