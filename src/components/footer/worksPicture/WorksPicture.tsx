import { getAllData } from "@/api/apiData"
import styles from "./WorksPicture.module.scss"
import { CategoryButton } from "@/components/button/categoryButton/CategoryButton";
import { Picture } from "./picture/Picture";

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
                            <CategoryButton>{data.category}</CategoryButton>
                        </p>
                        {data.architect && <p className={styles.architect}>Architect:
                            <span className={styles.architectBtn}>
                                {Array.isArray(data.architect)?
                                data.architect.map((text: string, index: number) => {
                                    return (
                                        <button type="button" key={index} className={styles.container}>
                                            <span className={styles.span}>{text}</span>
                                            <span className={styles.mark}>{index < data.architect.length-1 && "," }</span>
                                        </button>
                                    )
                                }): 
                                <button type="button" className={styles.singleBtn}>
                                    {data.architect}
                                </button>}
                            </span>
                        </p>}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

