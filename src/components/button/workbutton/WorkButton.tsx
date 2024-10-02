import styles from "./workButton.module.scss";
import { forwardRef } from "react";

interface WorkButtonProps {
  className?: string;
  hiddenWorkBtn?: boolean;
}

export const WorkButton = forwardRef<HTMLButtonElement, WorkButtonProps>(
  ({ className, hiddenWorkBtn }, ref) => {
  return (
    <button type="button" ref={ref}
      className={`${styles.workBtn} ${className} ${hiddenWorkBtn? styles.btnClear: ""}`}>WORKS</button>
  )
});

WorkButton.displayName = "WorkButton";