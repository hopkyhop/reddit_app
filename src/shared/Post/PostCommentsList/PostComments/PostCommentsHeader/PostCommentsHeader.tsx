import React from 'react';
import { convertTime } from '../../../../../utils/js/convertTime';
import styles from './postcommentsheader.css';

export function PostCommentsHeader({author, created} : {author ?: string, created ?: number}) {
  let date = 'Недавно'
  if (created) {
    date = convertTime(created)
  }
  return (
    <div className={styles.metaData}>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}></span>
        {date}
      </span>
      <div className={styles.userLink}>
        <img src={'https://i.postimg.cc/pXKbzCqj/2000.webp'}
          alt="avatar" className={styles.avatar} />
        <a href='#' className={styles.username}>{author}</a>
      </div>
    </div>
  );
}
