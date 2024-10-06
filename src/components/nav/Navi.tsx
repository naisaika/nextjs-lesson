import Link from "next/link"
import styles from "./Navi.module.scss"

interface NaviItems {
    text: string;
    href: string;
}

const NABI_ITEMS : NaviItems[] = [
    {text: "TOP", href: "/"},
    {text: "NEWS", href: "#"},
    {text: "VISION", href: "/vision"},
    {text: "RECRUIT", href: "/recruit"},
    {text: "ABOUT US", href: "/aboutus"},
    {text: "ACCESS", href: "#"},
]

export const Navi = () => {

  return (
    <nav className={styles.navCont}>
        <ul className={styles.navList}>
            {NABI_ITEMS.map((naviItem, index) => {
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
