import { RecruitTab } from '@/components/recruitTab/RecruitTab'
import styles from "./Recruit.module.scss"

const Recruit = () => {
  return (
    <div className={styles.sectionWrapper}>
      <RecruitTab isRecruit={false}/>
    </div>
  )
}

export default Recruit