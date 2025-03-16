'use client';

import Link from "next/link";
import styles from "./Categories.module.css";
import { useEffect, useState } from "react";
import { Category, Paginated, UiState } from "@/types";
import { QuestionsApi } from "@/api";


type Props = {
    title?: string
};

export default function Categories({title}: Props) {
    // TODO: replace with api call
    const [uiState, setUiState] = useState<UiState>('initial');
    const [categories, setCategories] = useState<Paginated<Category> | null>(null);
    useEffect(() => {
        async function fetchData() {
            setUiState('loading');

            const api = new QuestionsApi();

            const categoryResponse = await api.getCategories();

            if (!categoryResponse) {
                setUiState('error');
            }
            else {
                setUiState('data');
                setCategories(categoryResponse);
            }
        }
        fetchData();
    }, []);

    console.log('categories', categories);

    return (
        <div className={styles.categories}>
            <h2>hér kemur listi af flokkum</h2>
            <h2>{title}</h2>

            {uiState === 'loading' && <p>Sæki flokka</p>}
            {uiState === 'error' && <p>Villa við að sækja flokka</p>}
            {uiState === 'data' && (
            <ul> {categories?.data.map((category, index) => (
                <li key={index}>
                    <Link href={`/flokkar/${category.slug}`}>{category.name}</Link>
                </li>
            ))}
            </ul>
        )}
    </div>
    );
}