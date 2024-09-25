"use client";

import { ArchitectButton } from "@/components/button/architectButton/ArchitectButton";
import styles from "./TopBgImgCaption.module.scss"
import { CategoryButton } from "@/components/button/categoryButton/CategoryButton";
import { getArchitectData, getCategoryData } from "@/api/apiData";
import { useEffect, useState } from "react";
import { ArchitectType, CategoryType } from "@/api/dataType";

interface imgIdProps {
  imgId: number;
  mouseHover: boolean;
}

const TOP_CAPTION_LIST = [
  { id: 0,
    title: "Oyado Onn Nakatsugawa",
    subTitle: "お宿Onn 中津川",
    category: "Shared Space",
    architect: ["Bae", "Hasegawa", "Hiyori"]
  },
  { id: 1,
    title: "Dance of light",
    subTitle: "",
    category: "Shared Space",
    architect: "Toril"
  },
  { id: 2,
    title: "MAZDA MX-30 TVCM",
    subTitle: "MAZDA MX-30 TVCM出演",
    category: "Media",
    architect: ""
  }, 
  {
    id: 3,
    title: "Q Plaza FUTAKOTAMAGAWA",
    subTitle: "キュープラザ二子玉川",
    category: "Shared Space",
    architect: ["Honda", "Ohkawa"]
  },
  {
    id: 4,
    title: "31 VENTURES KOIL",
    subTitle: ["柏の葉","オープンイノベ－ション・ラボ"],
    category: "Shared Space",
    architect: "Furuichi"
  }
]

export const TopBgImgCaption = ({imgId, mouseHover}: imgIdProps) => {
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

  const caption = TOP_CAPTION_LIST.find((imgid) => imgId === imgid.id);
  if(!caption) return null

  const matchCategory = categoryData.find((category) => category.id === String(caption.id));
  if (!matchCategory) return null;

  const matchArchitect = architectData.find((architect) => architect.id === caption.id);
  if (!matchArchitect) return null;

  return (
    <div className={`${styles.captionCont} ${mouseHover? styles.imgHover: ""}`}>
      <h2 className={styles.title}>{caption.title}</h2>
      <p className={styles.subTitle}>
        {Array.isArray(caption.subTitle)? 
          caption.subTitle.map((text, index) => {
            return (
              <span key={index} className={styles.subTitleBlock}>
                {text}
              </span>
            )
          }) : caption.subTitle}
      </p>
      <span className={styles.line}></span>
      <p className={styles.category}>Category: 
        <CategoryButton dataCategory={caption.category} dataCategoryId={matchCategory.id}>{caption.category}</CategoryButton>
      </p>
      {caption.architect &&
        <ArchitectButton dataArchitect={caption.architect} dataArchitectId={matchArchitect.id} architect={caption.architect}></ArchitectButton>
      }
    </div>
  )
}
