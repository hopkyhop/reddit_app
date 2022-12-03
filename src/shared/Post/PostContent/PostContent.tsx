import React from 'react';
import { CardContent } from '../../CardsList/Card/CardContent';
import { CardMetaData } from '../../CardsList/Card/CardContent/CardMetaData';
import { KarmaCounter } from '../../CardsList/Card/CardCotrols/KarmaCounter';
import styles from './postcontent.css';

interface IPostContent {
  title: string,
  image: string,
  ups: number,
  author: string,
  avatarSrc: string,
  created: number,
}

export function PostContent({ title, image, ups, author, avatarSrc, created}: IPostContent) {
  return (
    <>
      <div className={styles.header}>
        <KarmaCounter ups={ups} />
        <div className={styles.header_left}>
          <h2 className={styles.title}>{title}</h2>
          <CardMetaData author={author} avatarSrc={avatarSrc} created={created}/>
        </div>
      </div>
      <div className={styles.content}>
        {(image.startsWith('http') && (image.endsWith('.jpg') || image.endsWith('.png') || image.endsWith('.gif')) ) && (
          <img className={styles.image} src={image} alt="Post image" />
        )}
      </div>
    </>
  );
}
