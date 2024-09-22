import { Top } from "@/components/top/Top";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Top />
    </div>
  );
}
