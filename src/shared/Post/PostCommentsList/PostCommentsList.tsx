import React, {useContext, useEffect} from 'react';
import styles from './postcommentslist.css';
import { usePostComments } from '../../../hooks/usePostComments';
import { generateId } from '../../../utils/react/generateIndexNumber';
import { PostComments } from './PostComments/PostComments';
import { Loader } from '../../Loader';

interface IPostCommentsList {
  postId: string,
  subreddit: string
}

export function PostCommentsList({postId, subreddit} : IPostCommentsList) {
  const [comments] = usePostComments(subreddit, postId);

  return (  
    <ul>
      {!comments && (
        Loader('Загрузка комментариев...')
      )}
      {comments.map((item) => 
        <PostComments key={item.data.id} comment={item.data} />
      )}
    </ul>
  );
}
