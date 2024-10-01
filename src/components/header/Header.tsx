"use client";

import { useEffect, useRef, useState } from "react";
import { Navi } from "../nav/Navi"
import styles from "./Header.module.scss"
import { Element } from "react-scroll";

export const Header = () => {

    const [isfixed, setIsFixed] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsFixed(!entry.isIntersecting);
          },
          { root: null, threshold: 0, rootMargin: "-100px" }
        );

        const currentHeader = headerRef.current;
    
        if (currentHeader) {
          observer.observe(currentHeader);
        }

        // クリーンアップ
        return () => {
          if (currentHeader) {
            observer.unobserve(currentHeader);
          }
        };
      }, []);

  return (
    <Element name="header">
      <section className={styles.headerSec} ref={headerRef}>
        <div className={styles.headerCont}>
        <div className={`${styles.navSec} ${isfixed ? styles.fixed : ""}`}>
            <Navi />
        </div>
        <div className={styles.contactCont}>
                <p>CONTACT</p>
                <p>联系我们</p>
                <p>연락처</p>
            </div>
        </div>
      </section>
    </Element>
  )
}
