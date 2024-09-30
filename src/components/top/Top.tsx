"use client";

import Image from "next/image"
import styles from "./Top.module.scss"
import { WorkButton } from "../button/workbutton/WorkButton";
import { TopH1 } from "./topH1/TopH1";
import { TopBgImgCaption } from "./topBgImgCaption/TopBgImgCaption";
import { useEffect, useState } from "react";
import { CategoryType } from "@/api/dataType";
import { ArchitectType } from "@/api/dataType";
import { getArchitectData, getCategoryData } from "@/api/apiData";

interface Img {
    id: number;
    Image: string;
}

const BG_IMG: Img[] = [
    { id: 0, Image: "/top/top1.jpg"},
    { id: 1, Image: "/top/top2.jpg"},
    { id: 2, Image: "/top/top3.jpg"},
    { id: 3, Image: "/top/top4.jpg"},
    { id: 4, Image: "/top/top5.jpg"}
]

export const Top = () => {

    const [hoverImg, setHoverImg] = useState<number | null>(null);
    const [categoryData, setCategoryData] = useState<CategoryType[]>([]);
    const [architectData, setArchitectData] = useState<ArchitectType[]>([]);

    useEffect(() => {
      const getCategory = async () => {
        try {
          const data = await getCategoryData();
          setCategoryData(data);
        } catch (error) {
          console.error("エラーが発生しました。", error);
        }
      };
      getCategory();
    }, []);
    
    useEffect(() => {
      const architectData = async () => {
        try {
          const data = await getArchitectData();
          setArchitectData(data);
          
        } catch (error) {
          console.error("エラーが発生しました。", error);
        }
      };
      architectData();
    }, []); 

    const onMouseHoverImg = (imgId: number) => {
        setHoverImg(imgId);
    }

    const removeHoverImg = () => {
        setHoverImg(null);
    }
    
    return (
        <>
          <TopH1/>
          <ul className={styles.bgImgList}>
                {BG_IMG.map((img, index) => {
                    return (
                        <li key={img.id}
                            data-index={index} // index を設定
                            onMouseEnter={() => onMouseHoverImg(img.id)}
                            onMouseLeave={removeHoverImg}>
                            <Image 
                                src={img.Image} 
                                alt={`背景${img.id}`} 
                                width={1920} 
                                height={1280} 
                                priority 
                                className={styles.bgImg}>
                            </Image>
                            <TopBgImgCaption categoryData={categoryData} architectData={architectData}
                                imgId={img.id} mouseHover={hoverImg === img.id}/>
                        </li>
                    )
                })}
            </ul>
            <WorkButton/>
        </>
    )
}
