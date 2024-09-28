"use client";

import { WorkButton } from "../button/workbutton/WorkButton"
import styles from "./Footer.module.scss"
import { Works } from "./works/Works"
import { WorksPicture } from "./worksPicture/WorksPicture"
import { useState } from "react";

export const Footer = () => {
  const [clickedCategory, setClickedCategory] = useState<string | undefined>(undefined);
  const [clickedArchitect, setClickedArchitect] = useState<string | undefined>(undefined);

  const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(e.currentTarget.dataset.category && e.currentTarget.dataset.category !== "ALL") {
      setClickedCategory(e.currentTarget.dataset.category);
      setClickedArchitect(undefined);
    } else if (e.currentTarget.dataset.architect && e.currentTarget.dataset.architect !== "ALL"){
      setClickedArchitect(e.currentTarget.dataset.architect);
      setClickedCategory(undefined);
    } else if (e.currentTarget.dataset.category === "ALL") {
      setClickedCategory(undefined)
      setClickedArchitect(undefined)
    } else if (e.currentTarget.dataset.architect === "ALL") {
      setClickedCategory(undefined)
      setClickedArchitect(undefined)
    }
  }

  return (
    <section className={styles.footerSec}>
      <div className={styles.worksCont}>
        <WorkButton className={styles.footerWorkBtn}/>
        <Works onClick={handleClickBtn}/>
        <WorksPicture onClick={handleClickBtn} 
          clickedCategory={clickedCategory} clickedArchitect={clickedArchitect}/>
      </div>
    </section>
  )
}
