"use client";

import { getAllData } from "@/api/apiData"
import styles from "./WorksPicture.module.scss"
import { CategoryButton } from "@/components/button/categoryButton/CategoryButton";
import { Picture } from "./picture/Picture";
import { ArchitectButton } from "@/components/button/architectButton/ArchitectButton";
import { useEffect, useRef, useState } from "react";
import { DataType } from "@/api/dataType";
import { useMemo } from "react";

interface onClickProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    clickedCategory?: string;
    clickedArchitect?: string | string[];
}

export const WorksPicture = ({clickedCategory, clickedArchitect}: onClickProps) => {
    
    const [allPictureData, setAllPictureData] = useState<DataType[]>([]);
    const cardListRef = useRef<(HTMLLIElement | null)[]>([]);
    const initialPositionMap = useRef(new Map()); // useRefで初期位置を保持
    const prevList = useRef(new Map()); // useRefで前の位置を保持
    const positionMap = useRef(new Map()); // useRefで現在位置を保持

    useEffect(() => {
        const fetchData = async () => {
            const allData = await getAllData();
            setAllPictureData(allData);
        };
    
        fetchData();
      }, []);

      const filterCard = useMemo(() => {
        return allPictureData.filter((data) => {
            const matchedCategory = clickedCategory ? data.category === clickedCategory : true;
            const matchedArchitect = clickedArchitect && typeof clickedArchitect === 'string'
                ? Array.isArray(data.architect)
                    ? (data.architect as string[]).includes(clickedArchitect)
                    : data.architect === clickedArchitect
                : true;
    
            return matchedCategory && matchedArchitect;
        });
    }, [allPictureData, clickedCategory, clickedArchitect]);

      useEffect(() => {
        const flipAnimation = () => {

          if (initialPositionMap.current.size === 0) {
            cardListRef.current.forEach((card, index) => {
              if (!card) return;
              const id = allPictureData[index]?.id;
              const style = card.getBoundingClientRect();
              initialPositionMap.current.set(id, style); // 初期位置を保存
            });
          }

          // 1. 現在の要素の位置を保存
          cardListRef.current.forEach((card) => {
            if(!card) return;
              const id = card.dataset.id;
              const style = card.getBoundingClientRect();
              prevList.current.set(id, style);
          });
      
          // 2. 要素の表示・非表示を切り替え
          cardListRef.current.forEach((card) => {
            if (!card) return;
            const category = card.dataset.category;
            const architect = card.dataset.architect;
          
            // card.dataset.architectがカンマ区切りの文字列なら配列に変換
            const architectList = architect ? architect.split(',').map(a => a.trim()) : [];
          
            // category と architect 両方に基づいてフィルタリング
            const showCard = filterCard.some((data) => {
              const matchedCategory = data.category === category;
          
              // architectが配列の場合はincludesで確認、文字列なら直接比較
              const matchedArchitect = architectList.length > 0
                ? Array.isArray(data.architect)
                  ? architectList.some(a => (data.architect as string[]).includes(a))
                  : architectList.includes(data.architect)                         
                : true;
          
              return matchedCategory && matchedArchitect;  
            });
    
            // 表示・非表示を切り替え
            const hiddenCard = card.classList.contains("WorksPicture_hidden__ipmON");

            if (!showCard && !hiddenCard) {
              card.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
            } 
    
            // アニメーションを適用
    
            if (!showCard && !hiddenCard) {
              card.classList.toggle("WorksPicture_hidden__ipmON");
            }
    
            if (hiddenCard) {
              card.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
            }
          });
    
          // 3. レイアウトの確定を待つためにrequestAnimationFrameを使用
          requestAnimationFrame(() => {
            cardListRef.current.forEach((card) => {
              if (!card) return;
              const id = card.dataset.id;
              const next = card.getBoundingClientRect();
              const prev = initialPositionMap.current.get(id) || prevList.current.get(id) || positionMap.current.get(id);
    
              // 4. 非表示から表示される要素のアニメーションを適用
              if (prev && !card.classList.contains("WorksPicture_hidden__ipmON")) {

                // 初回の位置から表示後の位置までのアニメーション
                card.animate([{
                  transform: `translate(${prev.x - next.x}px, ${prev.y - next.y}px)`,
                },
                {
                  transform: "translate(0, 0)",
                }], {
                  duration: 800,
                  easing: "cubic-bezier(.45,.15,0,1.02)",
                });
              }
    
              // 表示後の位置を保存
              positionMap.current.set(id, next);
            });
          });
        };
    
        flipAnimation();
      }, [filterCard, clickedCategory, clickedArchitect, allPictureData]);

      return (
        <div>
          <ul className={styles.dataList}>
            {allPictureData.map((data, index) => {
              // フィルタリングされたデータだけを表示する
              const isVisible = filterCard.some(item => item.id === data.id);
    
              return (
                <li key={data.id} className={`${styles.listDetail} ${!isVisible ? styles.hidden : ''}`}
                    data-id={data.id} data-category={data.category} data-architect={data.architect}
                    ref={(el) => { cardListRef.current[index] = el; }}>
                  <Picture img1={data.img1} img2={data.img2}></Picture>
                  <h3 className={styles.dataTitle}>{Array.isArray(data.title) ?
                    data.title.map((text, index) => <span key={index}>{text}</span>) : data.title}
                  </h3>
                  {data.subTitle && <p className={styles.dataSubTitle}>
                    {Array.isArray(data.subTitle) ?
                      data.subTitle.map((text, index) => <span key={index}>{text}</span>) : data.subTitle}</p>}
                  <p className={styles.category}>
                    Category:
                    <CategoryButton dataCategory={data.category} dataCategoryId={data.id}>
                      {data.category}
                    </CategoryButton>
                  </p>
                  {data.architect && 
                    <p className={styles.architect}>
                      Architect:
                      <ArchitectButton dataArchitect={data.architect} dataArchitectId={data.id} 
                        architect={data.architect}></ArchitectButton>
                    </p> }
                </li>
              );
            })}
          </ul>
        </div>
      );
    };

