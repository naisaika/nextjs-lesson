"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode, useEffect, useRef } from "react";
import { CategoryType } from "@/api/dataType";
import { ArchitectType } from "@/api/dataType";
import { getArchitectData, getCategoryData } from "@/api/apiData";

export const LayoutContext = createContext<{
    setState: Dispatch<SetStateAction<string>>;
    state: string;
    getCategory: CategoryType[];
    getArchitect: ArchitectType[];
    hiddenWorkBtn: boolean;
    footerRef: React.RefObject<HTMLElement>;
    workBtnRef: React.RefObject<HTMLButtonElement>;
    handleClickBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
    clickedCategory: string | undefined;
    clickedArchitect: string | undefined; 
  }>({
    setState: () => {}, 
    state: "",
    getCategory: [], // 初期値
    getArchitect: [], // 初期値
    hiddenWorkBtn: false,
    footerRef: { current: null },
    workBtnRef: { current: null },
    handleClickBtn: () => {},
    clickedCategory: undefined,
    clickedArchitect: undefined
  });

  export const useLayoutContext = () => {
    return useContext(LayoutContext);
  };

  const LayoutProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<string>("");
    const [getCategory, setCategory] = useState<CategoryType[]>([]);
    const [getArchitect, setArchitect] = useState<ArchitectType[]>([]);
    const [hiddenWorkBtn, setHiddenWorkBtn] = useState(false);
    const [clickedCategory, setClickedCategory] = useState<string | undefined>(undefined);
    const [clickedArchitect, setClickedArchitect] = useState<string | undefined>(undefined);
    const footerRef = useRef<HTMLElement | null>(null);
    const workBtnRef = useRef<HTMLButtonElement | null>(null);
  
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

    useEffect(() => {
      const handleScroll = () => {
        if (workBtnRef && workBtnRef.current && footerRef && footerRef.current) {
          // ボタンの位置 (7% from the bottom of the viewport)
          const workBtnBottomPosition = window.innerHeight * 0.93; // 93% (bottom 7%)
          const footerTopPosition = footerRef.current.getBoundingClientRect().top;

          // ボタンの位置がフッターの上部に達したら非表示にする
          if (workBtnBottomPosition >= footerTopPosition) {
            setHiddenWorkBtn(true);
          } else {
            setHiddenWorkBtn(false);
          }
        }
      };
  
      handleScroll(); // 初回のチェック
      window.addEventListener("resize", handleScroll);
      window.addEventListener("scroll", handleScroll); // スクロールでも再計算
  
      return () => {
        window.removeEventListener("resize", handleScroll);
        window.removeEventListener("scroll", handleScroll);
      };
    }, [workBtnRef, footerRef]);


    const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
      if(e.currentTarget.dataset.category && e.currentTarget.dataset.category !== "ALL") {
        setClickedCategory(e.currentTarget.dataset.category);
        setClickedArchitect(undefined);
      } else if (e.currentTarget.dataset.architect && e.currentTarget.dataset.architect !== "ALL"){
        setClickedArchitect(e.currentTarget.dataset.architect);
        setClickedCategory(undefined);
      } else if (e.currentTarget.dataset.category === "ALL") {
        setClickedCategory(undefined)
        setClickedArchitect(undefined)
      } else if (e.currentTarget.dataset.architect === "ALL") {
        setClickedCategory(undefined)
        setClickedArchitect(undefined)
      }
    }

    const contextValue = {
      setState: setState,
      state: state,
      getCategory: getCategory, // 取得したデータを追加
      getArchitect: getArchitect,
      hiddenWorkBtn: hiddenWorkBtn,
      footerRef: footerRef,
      workBtnRef: workBtnRef,
      handleClickBtn,
      clickedCategory,  
      clickedArchitect
    };
  
    return (
      <LayoutContext.Provider value={contextValue}>
        {children}
      </LayoutContext.Provider>
    );
  };
  
  export default LayoutProvider;
