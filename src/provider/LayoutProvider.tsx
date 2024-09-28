"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode, useEffect } from "react";
import { CategoryType } from "@/api/dataType";
import { ArchitectType } from "@/api/dataType";
import { getArchitectData, getCategoryData } from "@/api/apiData";

export const LayoutContext = createContext<{
    setState: Dispatch<SetStateAction<string>>;
    state: string;
    getCategory: CategoryType[];
    getArchitect: ArchitectType[];
  }>({
    setState: () => {}, 
    state: "",
    getCategory: [], // 初期値
    getArchitect: [] // 初期値
  });

  export const useLayoutContext = () => {
    return useContext(LayoutContext);
  };

  const LayoutProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<string>("");
    const [getCategory, setCategory] = useState<CategoryType[]>([]);
    const [getArchitect, setArchitect] = useState<ArchitectType[]>([]);
  
    // データを非同期に取得するためにuseEffectを使用
    useEffect(() => {
      const fetchData = async () => {
        const categoryData = await getCategoryData();
        const architectData = await getArchitectData();
        setCategory(categoryData);
        setArchitect(architectData);
      };
  
      fetchData();
    }, []);
  
    const contextValue = {
      setState: setState,
      state: state,
      getCategory: getCategory, // 取得したデータを追加
      getArchitect: getArchitect // 取得したデータを追加
    };
  
    return (
      <LayoutContext.Provider value={contextValue}>
        {children}
      </LayoutContext.Provider>
    );
  };
  
  export default LayoutProvider;
