"use client";

import Image from "next/image"
import styles from "./Top.module.scss"
import { WorkButton } from "../button/workbutton/WorkButton";
import { TopH1 } from "./topH1/TopH1";
import { TopBgImgCaption } from "./topBgImgCaption/TopBgImgCaption";
import { useState, useEffect } from "react";
import { useLayoutContext } from "@/provider/LayoutProvider";
import { Events, scroller } from 'react-scroll';
import Link from 'next/link';
import { getAllData } from '@/api/apiData';
import { DataType } from '@/api/dataType';

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
    const [, setIsScrolling] = useState(false);
    const [data, setData] = useState<DataType[] | null>(null);
    const { getCategory, getArchitect, hiddenWorkBtn, workBtnRef } = useLayoutContext();

    useEffect(() => {
        const fetchData = async () => {
          const data = await getAllData();
        setData(data)
        };
    
        fetchData();
      }, []);

    useEffect(() => {
  
      const handleScrollStart = () => {
        setIsScrolling(true);
        document.body.classList.add(styles.loading);
      };
  
      const handleScrollEnd = () => {
        setIsScrolling(false);
        document.body.classList.remove(styles.loading);
      };
  
      Events.scrollEvent.register("begin", handleScrollStart);
      Events.scrollEvent.register("end", handleScrollEnd);
  
      return () => {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
      };
    }, []);

    const onMouseHoverImg = (imgId: number) => {
        setHoverImg(imgId);
    }

    const removeHoverImg = () => {
        setHoverImg(null);
    }
  
    const handleAnimateScroll = (target: string) => {
      scroller.scrollTo(target, {
        duration: 3000,
        delay: 200, 
        smooth: 'easeInOutQuint',
        offset: -100,
      });
    };

    return (
        <>
            <TopH1/>
            <ul className={styles.bgImgList}>
                {BG_IMG.map((img, index) => {

                    const moveLink = data?.find((dataItem) => String(dataItem.id) === String(img.id));

                    return (
                        <li key={img.id}
                            data-index={index} // index を設定
                            onMouseEnter={() => onMouseHoverImg(img.id)}
                            onMouseLeave={removeHoverImg}>
                            <Link href={`/${moveLink?.url}`}>
                                <Image 
                                    src={img.Image} 
                                    alt={`背景${img.id}`} 
                                    width={1920} 
                                    height={1280} 
                                    priority 
                                    className={styles.bgImg}>
                                </Image>
                            </Link>
                            <TopBgImgCaption categoryData={getCategory} architectData={getArchitect}
                                imgId={img.id} mouseHover={hoverImg === img.id}/>
                        </li>
                    )
                })}
            </ul>
            <div onClick={() => handleAnimateScroll('footer')}>
                <WorkButton hiddenWorkBtn={hiddenWorkBtn} ref={workBtnRef}/>
            </div>
        </>
    )
}
