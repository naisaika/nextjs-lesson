import styles from "./AccessTesxt.module.scss"

export const AccessText = () => {
  return (
    <div>
        <h2>ACCESS</h2>
        <h3>ADDRESS</h3>
        <p>※移転しました<br></br>
            〒166-0002<br></br>
            東京都杉並区高円寺北2-18-7 千恵ビル 3F<br></br>
            JR中央線 高円寺駅の北口 徒歩５分<br></br>
            TEL 03-6915-1288　FAX 03-6276-9030<br></br>
        </p>
        <h3>EMAIL</h3>
        <p className={styles.email}>
            <span>JA / EN</span><br></br>
            office@narukuma.com<br></br>
            <span>CH</span><br></br>
            chen@narukuma.com<br></br>
            <span>KO</span><br></br>
            office@narukuma.com
        </p>
        <div className={styles.mapCont}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3239.7404984156906!2d139.61574600000003!3d35.708003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018edfb41149201%3A0xca6fe19eb3929f9c!2z5pel5pys44CB44CSMTY3LTAwNDMg5p2x5Lqs6YO95p2J5Lim5Yy65LiK6I2777yR5LiB55uu77yS77yU4oiS77yR77ySIOa1heizgOODk-ODqw!5e0!3m2!1sja!2sus!4v1728734452885!5m2!1sja!2sus" 
            width="600" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}></iframe>
        </div>
    </div>
  )
}
