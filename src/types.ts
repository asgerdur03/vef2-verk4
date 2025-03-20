
export type UiState = 'initial' | 'loading' | 'error' | 'data' | 'empty';

export type Category = {
    id: string;
    name: string;
    slug: string;
};

export type Paginated<T> = {
    data: T[];
    total: number;
    limit: number;
    offset: number;
};

export type Answer = {
    id: number;
    text: string;
    correct: boolean;
}

export type Question = {
    id: number;
    text: string;
    answers: Answer[];
    category: Category;
}


export type QuestionToCreate = {
    text: string;
    answers: AnswerToCreate[];
    categoryId: number | undefined; 
}

export type AnswerToCreate = {
    text: string;
    correct: boolean;
}