import React from 'react';
import styles from './card.css';
import { CardContent } from './CardContent';
import { CardCotrols } from './CardCotrols';
import { CardMenu } from './CardMenu';
import { CardPreview } from './CardPreview';

interface ICardProps {
  post: IPostsCardData
}

export interface IPostsCardData {
    url: string;
    author: string;
    created: number;
    selftext: string;
    title: string;
    ups: number;
    icon: string;
    previewImg: string;
    postImg: string;
    commentsQty: number;
    id: string;
    postLink: string;
    subreddit: string;
    postId: string;
}

export function Card({post}: ICardProps) {
  return (
    <li className={styles.card}>
      <CardContent 
        author={post.author} 
        title={post.title} 
        avatarSrc={post.icon}
        created={post.created} 
        postLink={post.postLink} 
        image={post.url} 
        postId={post.id}
        subreddit={post.subreddit}
        ups={post.ups}
      />
      <CardPreview imgSrc={post.url}/>
      <CardMenu/>
      <CardCotrols ups={post.ups} commentsQty={post.commentsQty}/>
    </li>
  );
}
