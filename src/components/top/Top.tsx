"use client";

import Image from "next/image"
import styles from "./Top.module.scss"
import { WorkButton } from "../button/workbutton/WorkButton";
import { TopH1 } from "./topH1/TopH1";
import { TopBgImgCaption } from "./topBgImgCaption/TopBgImgCaption";
import { useState } from "react";

interface Img {
    id: number;
    Image: string;
}

export const Top = () => {

    const [hoverImg, setHoverImg] = useState<number | null>(null);

    const bgImg: Img[] = [
        { id: 0, Image: "/top/top1.jpg"},
        { id: 1, Image: "/top/top2.jpg"},
        { id: 2, Image: "/top/top3.jpg"},
        { id: 3, Image: "/top/top4.jpg"},
        { id: 4, Image: "/top/top5.jpg"}
    ]

    const onMouseHoverImg = (imgId: number) => {
        setHoverImg(imgId)
    }

    const removeHoverImg = () => {
        setHoverImg(null)
    }

  return (
    <>
        <TopH1/>
        <ul className={styles.bgImgList}>
            {bgImg.map((img) => {
                return (
                    <li key={img.id}
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
                        <TopBgImgCaption imgId={img.id} mouseHover={hoverImg === img.id}/>
                    </li>
                )
            })}
        </ul>
        <WorkButton/>
    </>
  )
}
