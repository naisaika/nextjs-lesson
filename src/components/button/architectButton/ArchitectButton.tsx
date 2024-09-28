"use client";

import styles from "./ArchitectButton.module.scss"

interface ArchitectButtonProps {
    children?: React.ReactNode; // childrenを追加
    architect?: string | string[]; // architectが文字列または配列
    dataArchitect?: string | string[];
    dataArchitectId?: number;
    className?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }

export const ArchitectButton = ({children, architect, dataArchitect, dataArchitectId, onClick}: ArchitectButtonProps) => {

  return (
    <p className={styles.architect}>Architect:
      <span className={styles.architectBtn}>
        {Array.isArray(architect) ? 
          architect.map((text, index) => {
            return (
              <button type="button" data-architect={text} data-architect-id={`${dataArchitectId}-${index}`}
                key={index} className={styles.container} onClick={onClick}>
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
            onClick={onClick} className={styles.singleBtn}>
            {architect || children}
          </button>}
      </span>
    </p>
  )
}