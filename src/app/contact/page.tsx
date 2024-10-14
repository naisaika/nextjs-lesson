import styles from "./Contact.module.scss"

const Contact = () => {
  return (
    <div className={styles.contactSection}>
        <h2>CONTACT / 联系我们 / 연락처</h2>
        <h3>成瀬・猪熊建築設計事務所<br></br>
            NARUSE・INOKUMA ARCHITECTS</h3>
        <h4>ADDRESS</h4>
        <p>
          〒167-0043<br></br>
          東京都杉並区上荻1-24-12 第1浅賀ビル 102号<br></br>
          Dai1 Asaga building #102, 1-24-12, Kamiogi,<br></br>
          Suginami, Tokyo, 167-0043, JAPAN<br></br>
        </p>
        <h4>EMAIL</h4>
        <p className={styles.email}>
            <span>JA / EN</span><br></br>
            office@narukuma.com<br></br>
            <span>CH</span><br></br>
            chen@narukuma.com<br></br>
            <span>KO</span><br></br>
            office@narukuma.com
        </p>
    </div>
  )
}

export default Contact

