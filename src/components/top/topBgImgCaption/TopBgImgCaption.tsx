import styles from "./TopBgImgCaption.module.scss"
import { CategoryButton } from "@/components/button/categoryButton/CategoryButton";

interface imgIdProps {
  imgId: number;
  mouseHover: boolean;
}

export const TopBgImgCaption = ({imgId, mouseHover}: imgIdProps) => {

  const topCaptionList = [
    { id: 0,
      title: "Oyado Onn Nakatsugawa",
      subTitle: "お宿Onn 中津川",
      category: "Shared Space",
      architect: ["Bae", "Hasegawa", "Hiyori"]
    },
    { id: 1,
      title: "Dance of light",
      subTitle: "",
      category: "Shared Space",
      architect: "Toril"
    },
    { id: 2,
      title: "MAZDA MX-30 TVCM",
      subTitle: "MAZDA MX-30 TVCM出演",
      category: "Media",
      architect: ""
    }, 
    {
      id: 3,
      title: "Q Plaza FUTAKOTAMAGAWA",
      subTitle: "キュープラザ二子玉川",
      category: "Shared Space",
      architect: ["Honda", "Ohkawa"]
    },
    {
      id: 4,
      title: "31 VENTURES KOIL",
      subTitle: ["柏の葉","オープンイノベ－ション・ラボ"],
      category: "Shared Space",
      architect: "Furuichi"
    }
  ]

  const caption = topCaptionList.find((imgid) => imgId === imgid.id);
  if(!caption) return null

  return (
    <div className={`${styles.captionCont} ${mouseHover? styles.imgHover: ""}`}>
      <h2 className={styles.title}>{caption.title}</h2>
      <p className={styles.subTitle}>
        {Array.isArray(caption.subTitle)? 
          caption.subTitle.map((text, index) => {
            return (
              <span key={index} className={styles.subTitleBlock}>
                {text}
              </span>
            )
          }) : caption.subTitle}
      </p>
      <span className={styles.line}></span>
      <p className={styles.category}>Category: 
        <CategoryButton>{caption.category}</CategoryButton>
      </p>
      {caption.architect &&
        <p className={styles.architect}>Architect:
          <CategoryButton>
          {Array.isArray(caption.architect)? 
          caption.architect.map((text, index) => {
            return (
              <div key={index} className={styles.container}>
                <span className={styles.span}>{text}</span>
                <span className={styles.mark}>{index < caption.architect.length-1 && ","}</span>
              </div>
            )
          }) : caption.architect}
          </CategoryButton>
        </p>
      }
    </div>
  )
}
