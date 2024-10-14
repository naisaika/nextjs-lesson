import Link from "next/link"
import styles from "./Navi.module.scss"


interface NaviItems {
    text: string;
    href: string;
    status: string;
}

const NABI_ITEMS : NaviItems[] = [
    {text: "TOP", href: "/", status: "isTop"},
    {text: "NEWS", href: "#", status: "isNews"},
    {text: "VISION", href: "/vision", status: "isVision"},
    {text: "RECRUIT", href: "/recruit", status: "isRecruit"},
    {text: "ABOUT US", href: "/aboutus", status: "isAboutus"},
    {text: "ACCESS", href: "/access", status: "isAccess"},
]

export const Navi = () => {
    
  return (
    <nav className={styles.navCont}>
        <ul className={styles.navList}>
            {NABI_ITEMS.map((naviItem, index) => {
                return (
                    <li key={index}>
                        <Link href={naviItem.href} 
                            >
                            {naviItem.text}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}
