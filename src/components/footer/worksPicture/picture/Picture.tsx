"use client";

import Image from "next/image"
import styles from "./Picture.module.scss"
import { useState } from "react";
import { forwardRef } from "react";
import { useRouter } from "next/navigation";

interface ImgProps {
  img1: string;
  img2: string;
  url: string;
}

export const Picture = forwardRef<HTMLDivElement, ImgProps>(({ img1, img2, url }, ref)  => {

  const [isHover, setIsHover] = useState(false);
  const router = useRouter(); 

  const imgHover = () => {
    setIsHover(true);
  }

  const imgHoverReset = () => {
    setIsHover(false);
  }

  const showDetail = () => {
    router.push(`${url}`);
  }

  return (
    <div className={styles.imgCont} onMouseEnter={imgHover} onMouseLeave={imgHoverReset} ref={ref}>
      <Image src={img1} alt="写真" width={300} height={200}
        className={`${styles.img1} ${isHover? styles.img1Hover: styles.resetPic}`} >
      </Image>
      <Image src={img2} alt="写真" width={300} height={200} 
        className={`${styles.img2} ${isHover? styles.img2Hover: styles.resetPic2}`}
        onClick={showDetail}>
      </Image>
    </div>
  )
});

// コンポーネントをエクスポート
Picture.displayName = 'Pcture'; 