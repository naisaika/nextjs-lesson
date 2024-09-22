import styles from "./workButton.module.scss"

interface WorkButtonProps {
  className?: string;
}

export const WorkButton = ({className}: WorkButtonProps) => {
  return (
    <button type="button" className={`${styles.workBtn} ${className}`}>WORKS</button>
  )
}
