import Categories from "../../components/Categories/Categories";	

import styles from "./../page.module.css";

export default function Home() {
    return (
        <div className={styles.main}>
            <h1>Flokkar</h1>
            <Categories/>

        </div>
    );
}