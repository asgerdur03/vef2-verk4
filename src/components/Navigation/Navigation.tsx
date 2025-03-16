import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
    return (
        <div>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href="/">Forsida</Link></li>
                    <li><Link href="/flokkar">Flokkar</Link></li>
                    <li><Link href="/edit">Edit</Link></li>
                </ul>
            </nav>
        </div>
    );
}