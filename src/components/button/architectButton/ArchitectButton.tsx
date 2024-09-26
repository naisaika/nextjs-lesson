import styles from "./ArchitectButton.module.scss"

interface ArchitectButtonProps {
    children?: React.ReactNode; // childrenを追加
    architect?: string | string[]; // architectが文字列または配列
    dataArchitect?: string | string[];
    dataArchitectId?: number;
    className?: string;
  }

export const ArchitectButton = ({children, architect, dataArchitect, dataArchitectId}: ArchitectButtonProps) => {

  return (
    <p className={styles.architect}>Architect:
      <span className={styles.architectBtn}>
        {Array.isArray(architect) ? 
          architect.map((text, index) => {
            return (
              <button type="button" key={index} className={styles.container}>
                <span className={styles.span}
                  data-architect={text} // 修正: architect配列内のtextを直接使用
                  data-id={`${dataArchitectId}-${index}`} // 修正: 各ボタンに異なるIDを付与
                >
                  {text}
                </span>
                <span className={styles.mark}>
                  {index < architect.length - 1 && ","}
                </span>
              </button>
            )
          })
        : <button type="button" data-architect={dataArchitect} data-id={dataArchitectId} className={styles.singleBtn}>
            {architect || children}
          </button>}
      </span>
    </p>
  )
}