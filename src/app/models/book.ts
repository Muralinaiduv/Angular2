export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    description: string;
    release: string;
    rating?: number;
    tags?: string;
}
