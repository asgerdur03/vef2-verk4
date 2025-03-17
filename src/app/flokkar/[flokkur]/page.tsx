
import Questions from "../../../components/Questions/Questions";
import {Category} from "../../../components/Category/Category";
import styles from "./../../page.module.css";

export default async function FlokkaPage({params}: {params: Promise<{flokkur: string}>}) {

    const {flokkur} = await params;


    return (
        <div className={styles.main}>
            <Category slug={flokkur}/>
            <Questions slug={flokkur}/>
        </div>
    );
}
    

