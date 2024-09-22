import { WorkButton } from "../button/workbutton/WorkButton"
import styles from "./Footer.module.scss"
import { Works } from "./works/Works"
import { WorksPicture } from "./worksPicture/WorksPicture"

export const Footer = () => {


  return (
    <section className={styles.footerSec}>
      <div className={styles.worksCont}>
        <WorkButton className={styles.footerWorkBtn}/>
        <Works/>
        <WorksPicture/>
      </div>
    </section>
  )
}
