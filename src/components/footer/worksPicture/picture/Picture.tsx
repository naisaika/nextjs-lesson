"use client";

import Image from "next/image"
import styles from "./Picture.module.scss"
import { useState } from "react";

interface ImgProps {
  img1: string;
  img2: string;
}

export const Picture = ({img1, img2}: ImgProps) => {

  const [isHover, setIsHover] = useState(false);

  const imgHover = () => {
    setIsHover(true);
  }

  const imgHoverReset = () => {
    setIsHover(false);
  }

  return (
    <div className={styles.imgCont} onMouseEnter={imgHover} onMouseLeave={imgHoverReset}>
      <Image src={img1} alt="写真" width={300} height={200}
        className={`${styles.img1} ${isHover? styles.img1Hover: styles.resetPic}`} >
      </Image>
      <Image src={img2} alt="写真" width={300} height={200} 
        className={`${styles.img2} ${isHover? styles.img2Hover: styles.resetPic2}`}>
      </Image>
    </div>
  )
}