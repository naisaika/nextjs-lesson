import { CategoryButton } from "@/components/button/categoryButton/CategoryButton"
import styles from "./Works.module.scss"
import { getArchitectData, getCategoryData } from "@/api/apiData";

export const Works = async() => {

    const getCategory = await getCategoryData();
    const getArchitect = await getArchitectData();

  return (
    <div className={styles.worksSec}>
        <div className={styles.worksCont}>
            <p className={styles.worksTitle}>Category:</p>
            <ul className={styles.worksList}>
                {getCategory.map((category) => {
                    return(
                        <li key={category.id}>
                            <CategoryButton className={styles.footerCategoryBtn}>{category.title}</CategoryButton>
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
                            <CategoryButton className={styles.footerCategoryBtn}>{arcihtect.title}</CategoryButton>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
