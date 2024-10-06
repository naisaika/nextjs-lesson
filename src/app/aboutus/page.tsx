import { RecruitTab } from "@/components/recruitTab/RecruitTab"
import styles from "./AboutUs.module.scss"

const AboutUs = () => {
  return (
    <div className={styles.sectionWrapper}>
        <RecruitTab isRecruit={false}/>
    </div>
  )
}

export default AboutUs