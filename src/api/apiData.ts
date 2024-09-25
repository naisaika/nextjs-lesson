import { CategoryType, DataType, ArchitectType } from "./dataType"

export const getAllData = async(): Promise<DataType[]> => {
    const res = await fetch("http://localhost:3001/posts", {cache: "no-store"});

    if(!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    const allData = await res.json();
    return allData;
}

export const getCategoryData = async(): Promise<CategoryType[]> => {
    const res = await fetch("http://localhost:3001/categories", {cache: "no-store"});

    if(!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    const categoryData = await res.json();
    return categoryData;
}

export const getArchitectData = async(): Promise<ArchitectType[]> => {
    const res = await fetch("http://localhost:3001/architects", {cache: "no-store"});

    if(!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    const allArchitectData = await res.json();
    return allArchitectData;
}
