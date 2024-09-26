import styles from "./CategoryButton.module.scss"

interface childrenProps {
    children: React.ReactNode;
    className?: string;
    dataCategory?: string;
    dataCategoryId?: number;
}

export const CategoryButton = ({children, className, dataCategory, dataCategoryId}: childrenProps) => {
  return (
    <button type="button" className={`${styles.categoryBtn} ${className}`} 
      {...(dataCategory && {"data-category": dataCategory})}
      {...(dataCategoryId !== undefined && dataCategoryId !== null && { "data-id": dataCategoryId })}>{children}
    </button>
  )
}
