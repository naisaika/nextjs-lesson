"use client";

import Image from "next/image"
import styles from "./TopH1.module.scss"
import { useState, useEffect, useRef } from "react";

export const TopH1 = () => {

    const [isAnimate, setIsAnimate] = useState(false);
    const titleLogRef = useRef(null);
    const hasAnimated = useRef(false); 
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY.current && !hasAnimated.current) {
            // 下へのスクロールの場合
            setIsAnimate(true);
            hasAnimated.current = true;
          } else if (currentScrollY < lastScrollY.current && hasAnimated.current) {
            // 上へのスクロールの場合、最上部に戻ったらアニメーションをリセット
            setIsAnimate(false);
            hasAnimated.current = false;
          }
          lastScrollY.current = currentScrollY; // 現在のスクロール位置を更新
        };
    
        window.addEventListener("scroll", handleScroll);

      }, []);
    
  return (
    <h1 className={`${styles.imgH1} ${isAnimate? styles.imgH1Anime: ""}`} ref={titleLogRef}>
        <Image src="/top/logo.png" alt="ロゴ画像" width={385} height={385}></Image>
    </h1>
  )
}
