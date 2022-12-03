import React from "react";
import { DownArrowIcon } from "../../../../Icons/DownArrowIcon"
import { UpArrowIcon } from "../../../../Icons/UpArrowIcon";
import styles from './postcommentssidebar.css';
import { Break } from "../../../../Break";

export function PostCommentsSideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.icons}>
        <UpArrowIcon />
        <div className={styles.break}></div>
        <DownArrowIcon />
      </div>
      <div className={styles.commentBarWrapper}>
        <span className={styles.commentBar}></span>
      </div>
    </div>
  )
}