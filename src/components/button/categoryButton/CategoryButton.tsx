import styles from "./CategoryButton.module.scss"

interface childrenProps {
    children: React.ReactNode;
    className?: string;
}

export const CategoryButton = ({children, className}: childrenProps) => {
  return (
    <button type="button" className={`${styles.categoryBtn} ${className}`}>{children}</button>
  )
}
