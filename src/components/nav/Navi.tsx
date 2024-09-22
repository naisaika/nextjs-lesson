import Link from "next/link"
import styles from "./Navi.module.scss"

interface NaviItems {
    text: string;
    href: string;
}

export const Navi = () => {
    const naviItems : NaviItems[] = [
        {text: "TOP", href: "#"},
        {text: "NEWS", href: "#"},
        {text: "VISION", href: "#"},
        {text: "RECRUIT", href: "#"},
        {text: "ABOUT US", href: "#"},
        {text: "ACCESS", href: "#"},
    ]

  return (
    <nav className={styles.navCont}>
        <ul className={styles.navList}>
            {naviItems.map((naviItem, index) => {
                return (
                    <li key={index}>
                        <Link href={naviItem.href}>{naviItem.text}</Link>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}
