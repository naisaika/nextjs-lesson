import { CategoryButton } from "@/components/button/categoryButton/CategoryButton"
import styles from "./Works.module.scss"
import { useLayoutContext } from "@/provider/LayoutProvider";

export const Works = () => {
    const { getCategory, getArchitect } = useLayoutContext();

  return (
    <div className={styles.worksSec}>
        <div className={styles.worksCont}>
            <p className={styles.worksTitle}>Category:</p>
            <ul className={styles.worksList}>
                {getCategory.map((category) => {
                    return(
                        <li key={category.id}>
                            <CategoryButton 
                                dataCategory={category.title} dataCategoryId={category.id}
                                className={styles.footerCategoryBtn}>{category.title}</CategoryButton>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className={styles.worksCont}>
            <p className={styles.worksTitle}>Architect:</p>
            <ul className={styles.worksList}>
                {getArchitect.map((arcihtect) => {
                    return(
                        <li key={arcihtect.id}>
                            <CategoryButton 
                                dataArchitect={arcihtect.title} dataArchitectId={arcihtect.id}
                                className={styles.footerCategoryBtn}>{arcihtect.title}</CategoryButton>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
