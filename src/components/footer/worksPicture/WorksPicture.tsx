"use client";

import { getAllData } from "@/api/apiData"
import styles from "./WorksPicture.module.scss"
import { CategoryButton } from "@/components/button/categoryButton/CategoryButton";
import { Picture } from "./picture/Picture";
import { ArchitectButton } from "@/components/button/architectButton/ArchitectButton";
import { useEffect, useRef, useState } from "react";
import { DataType } from "@/api/dataType";

interface onClickProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    clickedCategory?: string;
    clickedArchitect?: string;
}

export const WorksPicture = ({onClick, clickedCategory, clickedArchitect}: onClickProps) => {
    
    const [allPictureData, setAllPictureData] = useState<DataType[]>([]);
    const cardListRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const allData = await getAllData();
            setAllPictureData(allData);
        };
    
        fetchData();
      }, []);

      const filterCard = allPictureData.filter((data) => {
        const matchedCategory = clickedCategory ? data.category === clickedCategory : true;
        const matchedArchitect = clickedArchitect && typeof clickedArchitect === 'string'
          ? data.architect.includes(clickedArchitect)
          : true;
        return matchedCategory && matchedArchitect;
      });

      useEffect(() => {
        const flipAnimation = () => {
          const prevList = new Map();
      
          // 1. 現在の要素の位置を保存
          cardListRef.current.forEach((card) => {
              const id = card.dataset.id;
              const style = card.getBoundingClientRect();
              prevList.set(id, style);
          });
      
          // 2. 要素の表示・非表示を切り替え
          cardListRef.current.forEach((card) => {
            const category = card.dataset.category;
            const architect = card.dataset.architect;
          
            // category と architect 両方に基づいてフィルタリング
            const shouldBeVisible = filterCard.some((data) => {
              const matchedCategory = data.category === category;
              const matchedArchitect = data.architect === architect;  // architectが一致するかどうかも確認
              return matchedCategory && matchedArchitect;  // 両方の条件を満たすか
            });
          
            // 表示・非表示を切り替え
            card.classList.toggle("hidden", !shouldBeVisible);
          });
      
          // 3. レイアウトの確定を待つためにrequestAnimationFrameを使用
          requestAnimationFrame(() => {
            cardListRef.current.forEach((card) => {
              const next = card.getBoundingClientRect();
              const prev = prevList.get(card.dataset.id);
      
              console.log("next.x:", next.x);
              console.log("prev.x:", prev ? prev.x : 'undefined');
              console.log("next.y:", next.y);
              console.log("prev.y:", prev ? prev.y : 'undefined');
      
              // 4. 非表示から表示される要素のアニメーションを適用
              if (!prev || prev.width === 0) {
                // 画面に再表示される要素のアニメーション（下から上へフェードイン）
                card.animate(
                  [
                    { opacity: 0, transform: "translateY(100px)" }, // 100px下からスタート
                    { opacity: 1, transform: "translateY(0)" }, // 画面内の正しい位置へ
                  ],
                  { duration: 500, easing: "ease-out" }
                );
                return;
              }
      
              // 5. 移動アニメーションを適用
              const deltaX = prev.x - next.x;
              const deltaY = prev.y - next.y;
      
              // prevが存在する場合のみアニメーションを適用
              if (prev) {
                card.animate(
                  [
                    {
                      transform: `translate(${deltaX}px, ${deltaY}px)`,
                    },
                    {
                      transform: "translate(0, 0)",
                    },
                  ],
                  {
                    duration: 500,
                    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }
                );
              }
            });
          });
        };
      
        flipAnimation();
    }, [filterCard, clickedCategory, clickedArchitect, allPictureData]);

  return (
    <div>
        <ul className={styles.dataList}>
            {filterCard.map((data) => {

                return (
                    <li key={data.id} className={styles.listDetail} 
                    data-id={data.id} data-category={data.category} data-architect={data.architect}
                    ref={(el) => {
                        if (el) cardListRef.current[data.id] = el; // 参照を保存
                    }}
>                        <Picture                                 
                        img1={data.img1} img2={data.img2}></Picture>
                        <h3 className={styles.dataTitle}>{Array.isArray(data.title)?
                            data.title.map((text, index) => {
                                return (
                                    <span key={index}>{text}</span>
                                )
                            }): data.title}
                        </h3>
                        {data.subTitle && <p className={styles.dataSubTitle}>
                            {Array.isArray(data.subTitle)? 
                            data.subTitle.map((text, index) => {
                                return (
                                    <span key={index}>{text}</span>
                                )
                            }): data.subTitle}</p>}
                        <p className={styles.category}>Category: 
                            <CategoryButton dataCategory={data.category} dataCategoryId={data.id}
                                onClick={onClick}

                                >{data.category}</CategoryButton>
                        </p>
                        {data.architect && 
                            <ArchitectButton dataArchitect={data.architect} dataArchitectId={data.id} 
                                architect={data.architect} onClick={onClick}></ArchitectButton>}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

