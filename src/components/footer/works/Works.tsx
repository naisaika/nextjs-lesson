import { CategoryButton } from "@/components/button/categoryButton/CategoryButton"
import styles from "./Works.module.scss"

const CATEGORY_LIST = [
    { id: 0, title: "ALL"},
    { id: 1, title: "Shared Space"},
    { id: 2, title: "Private House"},
    { id: 3, title: "Exhibition"},
    { id: 4, title: "Product"},
    { id: 5, title: "Media"}
]

  const ARCHITECT_LIST = [
    { id: 0, title: "ALL"},
    { id: 1, title: "Arei"},
    { id: 2, title: "Ota"},
    { id: 3, title: "Kanda"},
    { id: 4, title: "Iwai"},
    { id: 5, title: "Honda"},
    { id: 6, title: "Furuichi"},
    { id: 7, title: "Itami"},
    { id: 8, title: "Fujieda"},
    { id: 9, title: "Oka"},
    { id: 10, title: "Hasegawa"},
    { id: 11, title: "Isobe"},
    { id: 12, title: "Ogiya"}
]

export const Works = () => {

  return (
    <div className={styles.worksSec}>
        <div className={styles.worksCont}>
            <p className={styles.worksTitle}>Category:</p>
            <ul className={styles.worksList}>
                {CATEGORY_LIST.map((category) => {
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
                {ARCHITECT_LIST.map((arcihtect) => {
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
