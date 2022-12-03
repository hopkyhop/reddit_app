import React from 'react';
import styles from './cardmetadata.css';
import { convertTime } from '../../../../../utils/js/convertTime'

interface ICardMetaData  {
  author: string,
  avatarSrc: string,
  created: number,
}

export function CardMetaData({author, avatarSrc, created} : ICardMetaData) {
  const date = convertTime(created);

  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img src={avatarSrc || 'https://i.postimg.cc/pXKbzCqj/2000.webp'}
          alt="avatar" className={styles.avatar} />
        <a href={`https://www.reddit.com/user/${author}`} className={styles.username}>{author}</a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        {date}
      </span>
    </div>
  );
}
