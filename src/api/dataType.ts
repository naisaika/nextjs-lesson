export interface DataType {
    id: number, 
    img1: string,
    img2: string,
    title: string, 
    subTitle: string | [],
    category: string,
    architect: string | [],
    url: string;
    video?: string;
    picture?: string[];
    date?: string;
    location?: string;
    web?: string;
    photographer?: string;
}

export interface CategoryType {
    id: number, 
    title: string
}

export interface ArchitectType {
    id: number, 
    title: string
}