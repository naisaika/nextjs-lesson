import styles from "./CategoryButton.module.scss"
import { forwardRef } from "react";
import { useLayoutContext } from "@/provider/LayoutProvider"; 

interface childrenProps {
    children: React.ReactNode;
    className?: string;
    dataCategory?: string;
    dataCategoryId?: number;
    dataArchitect?: string;
    dataArchitectId?: number;
}

export const CategoryButton = forwardRef<HTMLButtonElement, childrenProps>(
  ({ children, className, dataCategory, dataCategoryId, dataArchitect, dataArchitectId }, ref)  => {

    const { handleClickBtn } = useLayoutContext();

  return (
    <button type="button" ref={ref} className={`${styles.categoryBtn} ${className}` } 
      {...(dataCategory && {"data-category": dataCategory})}
      {...(dataCategoryId !== undefined && dataCategoryId !== null && { "data-category-id": dataCategoryId })}
      {...(dataArchitect && {"data-architect": dataArchitect})}
      {...(dataArchitectId !== undefined && dataArchitectId !== null && { "data-architect-id": dataArchitectId })}
      onClick={handleClickBtn}>{children}
    </button>
  )
})
CategoryButton.displayName = 'CategoryButton';