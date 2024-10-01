"use client";

import Image from "next/image";
import { WorkButton } from "../button/workbutton/WorkButton"
import styles from "./Footer.module.scss"
import { Works } from "./works/Works"
import { WorksPicture } from "./worksPicture/WorksPicture"
import { useLayoutContext } from "@/provider/LayoutProvider"; 
import { Events, Element, scroller } from 'react-scroll';
import { useState, useEffect } from "react";

export const Footer = () => {
  const { footerRef, clickedCategory, clickedArchitect, handleClickBtn } = useLayoutContext();
  const [, setIsScrolling] = useState(false);

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

  const handleAnimateScroll = (target: string) => {
    scroller.scrollTo(target, {
      duration: 3000,
      delay: 200, 
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <Element name="footer">
      <section className={styles.footerSec} ref={footerRef} id="footer">
        <div className={styles.worksCont}>
          <WorkButton className={styles.footerWorkBtn}/>
          <Works/>
          <WorksPicture onClick={handleClickBtn} 
            clickedCategory={clickedCategory} clickedArchitect={clickedArchitect}/>
        </div>
        <div onClick={() => handleAnimateScroll('header')} className={styles.backTopBtn}>
          <Image src="/footer/btn_top.png" alt="topへ戻る" width={60} height={60} priority 
            className={styles.topImg}>
          </Image>
        </div>
        <div className={styles.copyright}>
          <small>Copyright &copy; Naruse·Inokuma Architects All rights reserved.</small>
        </div>
      </section>
    </Element>
  )
}
