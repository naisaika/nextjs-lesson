import { DataType } from "./dataType"

export const getAllData = async(): Promise<DataType[]> => {
    const res = await fetch("http://localhost:3001/posts", {cache: "no-store"});

    if(!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    const allData = await res.json();
    return allData;
}
