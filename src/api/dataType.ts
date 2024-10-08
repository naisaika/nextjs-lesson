export interface DataType {
    id: number, 
    img1: string,
    img2: string,
    title: string, 
    subTitle: string | [],
    category: string,
    architect: string | []
}

export interface CategoryType {
    id: number, 
    title: string
}

export interface ArchitectType {
    id: number, 
    title: string
}