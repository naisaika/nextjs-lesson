"use client";

import { WorkButton } from "../button/workbutton/WorkButton"
import styles from "./Footer.module.scss"
import { Works } from "./works/Works"
import { WorksPicture } from "./worksPicture/WorksPicture"
import { useLayoutContext } from "@/provider/LayoutProvider"; 

export const Footer = () => {
  const { footerRef, clickedCategory, clickedArchitect, handleClickBtn } = useLayoutContext();

  return (
    <section className={styles.footerSec} ref={footerRef} id="footer">
      <div className={styles.worksCont}>
        <WorkButton className={styles.footerWorkBtn}/>
        <Works onClick={handleClickBtn}/>
        <WorksPicture onClick={handleClickBtn} 
          clickedCategory={clickedCategory} clickedArchitect={clickedArchitect}/>
      </div>
    </section>
  )
}
