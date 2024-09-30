"use client";

import Image from "next/image"
import styles from "./Top.module.scss"
import { WorkButton } from "../button/workbutton/WorkButton";
import { TopH1 } from "./topH1/TopH1";
import { TopBgImgCaption } from "./topBgImgCaption/TopBgImgCaption";
import { useState } from "react";
import { useLayoutContext } from "@/provider/LayoutProvider";

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
    const { getCategory, getArchitect, hiddenWorkBtn, workBtnRef } = useLayoutContext();

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
                            <TopBgImgCaption categoryData={getCategory} architectData={getArchitect}
                                imgId={img.id} mouseHover={hoverImg === img.id}/>
                        </li>
                    )
                })}
            </ul>
            <WorkButton hiddenWorkBtn={hiddenWorkBtn} ref={workBtnRef}/>
        </>
    )
}
