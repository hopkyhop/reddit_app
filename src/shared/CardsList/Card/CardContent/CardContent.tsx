import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
//import { postsContext } from '../../../context/postsContext';
import { Post } from '../../../Post';
import styles from './cardcontent.css';
import { CardMetaData } from './CardMetaData';

interface ICardContent {
  author: string,
  title: string,
  avatarSrc: string,
  created: number,
  postLink: string,
  image: string,
  postId: string,
  subreddit: string,
  ups: number
}

export function CardContent({ author, title, avatarSrc, created, image, postId, subreddit, ups }: ICardContent) {
  //const [isModalOpened, setIsModalOpened] = useState(false)

  return (
    <div className={styles.textContent}>
      <CardMetaData author={author} avatarSrc={avatarSrc} created={created} />
      <h2 className={styles.title}>
        <Link to={`/posts/${postId}`} className={styles.postLink} >
          {title}
        </Link>
      </h2>
    </div>
  );
}
