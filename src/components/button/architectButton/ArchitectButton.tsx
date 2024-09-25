import styles from "./ArchitectButton.module.scss"

interface ArchitectButtonProps {
    architect: string | string[]; // architectが文字列または配列
    dataArchitect: string;
    dataArchitectId: number;
  }

export const ArchitectButton = ({architect, dataArchitect, dataArchitectId}: ArchitectButtonProps) => {
  return (
        <p className={styles.architect}>Architect:
          <span className={styles.architectBtn}>
          {Array.isArray(architect)? 
          architect.map((text, index) => {
            return (
              <button type="button" data-architect={dataArchitect} data-id={dataArchitectId} 
                key={index} className={styles.container}>
                <span className={styles.span}>{text}</span>
                <span className={styles.mark}>{index < architect.length-1 && ","}</span>
              </button>
            )
          }) : <button type="button" data-architect={dataArchitect} data-id={dataArchitectId}
                   className={styles.singleBtn}>
                {architect}
              </button>}
          </span>
        </p>
  )
}