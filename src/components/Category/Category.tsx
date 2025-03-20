'use client';

import { useEffect, useState } from "react";
import { Category as CategoryType , UiState} from "@/types";
import { QuestionsApi } from "@/api";

export function Category({slug}: {slug: string}) {
    const [category, setCategory] = useState<CategoryType|null>(null);
    const [uiState, setUiState] = useState<UiState>('initial');


    useEffect(() => {
        async function fetchData() {
            setUiState('loading');
            const api = new QuestionsApi();
            const response = await api.getCategory(slug);
            if (!response) {
                setUiState('error');
            }
            else {
                setUiState('data');
                setCategory(response);
            }
            
        }
        fetchData();
    }, [slug]);

    

    return (
        <div>
            {uiState === 'loading' && <p>Sæki flokka</p>}
            {uiState === 'error' && <p>Villa við að sækja flokka</p>}
            {uiState === 'data' && (
                <div>
                    <h1>{category?.name}</h1>
                </div>
            )}

        </div>
    
        
    )

}