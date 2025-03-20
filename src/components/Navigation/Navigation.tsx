import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.link}><Link href="/">Forsida</Link></div>
                <div className={styles.link}><Link href="/flokkar">Flokkar</Link></div>
                <div className={styles.link}><Link href="/create">Create</Link></div>
            </nav>
        </div>
        
        
    );
}