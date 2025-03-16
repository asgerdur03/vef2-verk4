'use client';

import { useEffect, useState } from "react";
import { Category as CategoryType } from "@/types";
import { QuestionsApi } from "@/api";

export function Category({slug}: {slug: string}) {
    const [category, setCategory] = useState<CategoryType|null>(null);

    useEffect(() => {
        async function fetchData() {
            const api = new QuestionsApi();
            const response = await api.getCategory(slug);
            setCategory(response);
        }
        fetchData();
    }, [slug]);

    if (!category){
        // Birta 404 síðu
        return <p>Flokkur fannst ekki, 404</p>;
    }

    return (<h1>{category.name}</h1>
        
    )

}