import { Category, Paginated, Question, QuestionToCreate} from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://vef2-2025-v3-synilausn.onrender.com";


export class QuestionsApi {
    async fetchFromApi<T>(url: string): Promise<T|null>  {
        let response:Response | undefined;
        try {
            response = await fetch(url);
        } catch (error) {
            console.error('error fetching from api', url, error);
            return null;
        }
        if (!response.ok) {
            console.error('non 2xx status from api', url);
            return null;
        }

        if (response.status === 404) {
            console.error('404 from api', url);
            return null;
        }
        let json: unknown;
        try {
            json = await response.json();
        } catch (error) {
            console.error('error parsing json from api', url, error);
            return null;
        }
        return json as T;
    }
    
    // get single category
    async getCategory(slug: string): Promise<Category|null> {
        const url = `${BASE_URL}/categories/${slug}`;
        const response = await this.fetchFromApi<Category|null>(url);

        return response;
    }

    // get all categories
    async getCategories(): Promise<Paginated<Category> | null> {
        const url = `${BASE_URL}/categories`;
        const response = await this.fetchFromApi<Paginated<Category>>(url);

        // todo hér gæti ég staðfest gerð gagna
        return response;
    }

    // get all questions
    async getQuestions(): Promise<Paginated<Question> | null> {
        const url = `${BASE_URL}/questions`;
        const response = await this.fetchFromApi<Paginated<Question>>(url);
        
        return response;
    }

    async questionsByCategory(slug: string): Promise<Paginated<Question> | null> {
        const url = `${BASE_URL}/questions?category=${slug}`;
        const response = this.fetchFromApi<Paginated<Question>>(url);
        
        return response;

    }

    async createQuestion(question: QuestionToCreate): Promise<Question | null> {
        const url = `${BASE_URL}/questions`;
        console.log('question', question);

        let response: Response | undefined;
        try {
            response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(question),
            });
        } catch (error) {
            console.error('error fetching from api', url, error);
            return null;
        }
        if (!response.ok) {
            console.error('non 2xx status from api', url);
            return null;
        }

        if (response.status === 404) {
            console.error('404 from api', url);
            return null;
        }

        try {
            const json = await response.json();
            console.log(json);
            return json as Question;
        } catch (error) {
            console.error('error parsing json from api', url, error);
            return null;
        }
    }

}