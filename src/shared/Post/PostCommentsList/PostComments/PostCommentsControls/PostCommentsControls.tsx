import React, { useState } from 'react';
import styles from './postcommentscontrols.css';
import { Text } from '../../../../Text';
import { Break } from '../../../../Break';
import { CommentsIcon } from '../../../../Icons';
import { ShareIcon } from '../../../../Icons';
import { WarningIcon } from '../../../../Icons';
import { EColors } from '../../../../Text';
import { PostCommentsAnswer } from '../PostCommentsAnswer';

interface IPostCommentsControls {
  author?: string,
}

export function PostCommentsControls({author} : IPostCommentsControls ) {

  const [isCommentFormOpen, setIsCommentFormOpen] = useState(false)

  function handleClick() {
    setIsCommentFormOpen(!isCommentFormOpen)
  }

  return (
    <>
      <div className={styles.controls}>
        <button className={styles.controlsBtn} onClick={handleClick}>
          <CommentsIcon />
          <Break size={4} inline={true} />
          <Text size={14} color={EColors.gray99}>Ответить</Text>
        </button>
        <Break size={20} inline={true} />
        <button className={styles.controlsBtn}>
          <ShareIcon />
          <Break size={4} inline={true} />
          <Text size={14} color={EColors.gray99}>Поделиться</Text>
        </button>
        <Break size={20} inline={true} />
        <button className={styles.controlsBtn}>
          <WarningIcon />
          <Break size={4} inline={true} />
          <Text size={14} color={EColors.gray99}>Пожаловаться</Text>
        </button>
      </div>
      {isCommentFormOpen &&
        <PostCommentsAnswer author={author}/>
      }
    </>


  );
}
