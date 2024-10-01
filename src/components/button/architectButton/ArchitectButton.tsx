"use client";

import styles from "./ArchitectButton.module.scss"
import { useLayoutContext } from "@/provider/LayoutProvider"; 

interface ArchitectButtonProps {
    children?: React.ReactNode; // childrenを追加
    architect?: string | string[]; // architectが文字列または配列
    dataArchitect?: string | string[];
    dataArchitectId?: number;
    className?: string;
  }

export const ArchitectButton = ({children, architect, dataArchitect, dataArchitectId }: ArchitectButtonProps) => {

  const { handleClickBtn } = useLayoutContext();

  return (

      <span className={styles.architectBtn}>
        {Array.isArray(architect) ? 
          architect.map((text, index) => {
            return (
              <button type="button" data-architect={text} data-architect-id={`${dataArchitectId}-${index}`}
                key={index} className={styles.container} onClick={handleClickBtn}>
                <span className={styles.span}>
                  {text}
                </span>
                <span className={styles.mark}>
                  {index < architect.length - 1 && ","}
                </span>
              </button>
            )
          })
        : <button type="button" data-architect={dataArchitect} data-id={dataArchitectId} 
            onClick={handleClickBtn} className={styles.singleBtn}>
            {architect || children}
          </button>}
      </span>
  )
}