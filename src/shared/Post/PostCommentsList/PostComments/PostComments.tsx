import React from 'react';
import { PostCommentsHeader } from './PostCommentsHeader';
import styles from './postcomments.css';
import { Text } from '../../../Text';
import { PostCommentsSideBar } from './PostCommentsSideBar';
import { PostCommentsControls } from './PostCommentsControls';
import { Break } from '../../../Break';

interface IPostComments {
  children?: React.ReactNode,
  comment?: any,
}

export function PostComments({children, comment}: IPostComments) {
  return (
      <li className={styles.commentChild}>
        <PostCommentsSideBar />
        <div className={styles.content}>
          <PostCommentsHeader author={comment?.author} created={comment?.created}/>
          <Text As="p" size={14}>
            {comment?.body}
          </Text>
          <PostCommentsControls author={comment?.author}/>
          {children}
        </div>
      </li>
  );
}
