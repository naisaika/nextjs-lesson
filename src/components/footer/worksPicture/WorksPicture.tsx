import { getAllData } from "@/api/apiData"
import styles from "./WorksPicture.module.scss"
import { CategoryButton } from "@/components/button/categoryButton/CategoryButton";
import { Picture } from "./picture/Picture";
import { ArchitectButton } from "@/components/button/architectButton/ArchitectButton";

export const WorksPicture = async() => {

    const allData = await getAllData();

  return (
    <div>
        <ul className={styles.dataList}>
            {allData.map((data) => {

                return (
                    <li key={data.id} className={styles.listDetail}>
                        <Picture img1={data.img1} img2={data.img2}></Picture>
                        <h3 className={styles.dataTitle}>{Array.isArray(data.title)?
                            data.title.map((text, index) => {
                                return (
                                    <span key={index}>{text}</span>
                                )
                            }): data.title}
                        </h3>
                        {data.subTitle && <p className={styles.dataSubTitle}>
                            {Array.isArray(data.subTitle)? 
                            data.subTitle.map((text, index) => {
                                return (
                                    <span key={index}>{text}</span>
                                )
                            }): data.subTitle}</p>}
                        <p className={styles.category}>Category: 
                            <CategoryButton dataCategory={data.category} dataId={data.id}>{data.category}</CategoryButton>
                        </p>
                        {data.architect && 
                            <ArchitectButton architect={data.architect}></ArchitectButton>}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

