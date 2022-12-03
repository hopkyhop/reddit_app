import React, { useEffect, useRef, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useHistory, useParams } from 'react-router-dom';
import { usePostData } from '../../hooks/usePostData';
import { CommentForm } from '../CommentFormContainer/CommentForm';
import { CommentFormContainer } from '../CommentFormContainer';
import { Loader } from '../Loader';
import styles from './post.css';
import { PostCommentsList } from './PostCommentsList';
import { PostContent } from './PostContent';


interface IParams {
  id: string
}

export function Post() {
  const ref = useRef<HTMLDivElement>(null) //ссылка на нашу модалку
  const history = useHistory();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        history.push('/posts')
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [])

  const node = document.querySelector('#modal_root');
  if (!node) return null;
  const link: IParams = useParams()
  const [data] = usePostData(link.id);

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      {!data && (
        Loader('Загрузка поста...')
      )}
      {data && (
        <>
        <PostContent title={data.title} image={data.url} ups={data.ups} author={data.author} avatarSrc={data.avatarSrc} created={data.created} />
        <CommentForm />
        <PostCommentsList postId={data.id} subreddit={data.subreddit} />
       </>
      )}
    </div>
  ), node);
}

