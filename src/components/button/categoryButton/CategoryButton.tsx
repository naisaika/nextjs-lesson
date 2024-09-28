import styles from "./CategoryButton.module.scss"
import { forwardRef } from "react";

interface childrenProps {
    children: React.ReactNode;
    className?: string;
    dataCategory?: string;
    dataCategoryId?: number;
    dataArchitect?: string;
    dataArchitectId?: number;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CategoryButton = forwardRef<HTMLButtonElement, childrenProps>(
  ({ children, className, dataCategory, dataCategoryId, dataArchitect, dataArchitectId, onClick }, ref)  => {

  return (
    <button type="button" ref={ref} className={`${styles.categoryBtn} ${className}` } 
      {...(dataCategory && {"data-category": dataCategory})}
      {...(dataCategoryId !== undefined && dataCategoryId !== null && { "data-category-id": dataCategoryId })}
      {...(dataArchitect && {"data-architect": dataArchitect})}
      {...(dataArchitectId !== undefined && dataArchitectId !== null && { "data-architect-id": dataArchitectId })}
      onClick={onClick}>{children}
    </button>
  )
})
CategoryButton.displayName = 'CategoryButton';