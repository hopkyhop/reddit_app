import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { Loader } from '../Loader';

export function CardsList() {
  const token = useSelector<RootState, string>(state => state.token);

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorLoading, setErrorLoading] = useState<string>('');
  const [nextAfter, setNextAfter] = useState<string>('');
  const [isFinished, setIsFinished] = useState<boolean>(false);    //закончились ли посты в api
  const [countLoading, setCountLoading] = useState<number>(0);     //счетчик подгрузок
  const [loadMore, setLoadMore] = useState<boolean>(false);        //загрузить больше

  async function load() {
    if (posts.length == 0 && loading) return;
    setLoading(true);
    setErrorLoading('');

    try {
      const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/best', {
        headers: { Authorization: `bearer ${token}` },
        params: {
          limit: 10,
          after: nextAfter,
        }
      });
      console.log(children)
      if (!after) {
        setIsFinished(true)
      }
      setNextAfter(after);
      setPosts((prevChildren) => prevChildren.concat(...children));
      setCountLoading(countLoading + 1);
    } catch (error) {
      setErrorLoading(String(error));
    } finally {
      setLoading(false);
    }
  };

  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!token || token.length < 0 || token == 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      //если элемент на странице виден
      if ( entries[0].isIntersecting && countLoading < 3 && nextAfter !== null) {
        load();
      }
    }, {
      rootMargin: '10px',
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [token, nextAfter, bottomOfList.current, countLoading]);

  function destroyCount() {
    setCountLoading(0)
  }

  return (
    <ul className={styles.cardsList}>
      {/* если не пришли посты */}
      {posts.length === 0 && !loading && !errorLoading && (
        <div role="alert" style={{ textAlign: 'center' }}>Нет ни одного поста</div>
      )}

      {posts.map(post => (
        <Card
          key={post.data.id}
          post={post.data}
        />
      ))}

      {/* каждые 3 подгрузки */}
      {countLoading == 3 ? 
        <button onClick={destroyCount} className={styles.btnMore}>Загрузить еще</button> : null
      }

      <div ref={bottomOfList} />

      {/* если обрабатывается запрос */}
      {loading && (
        Loader('Загрузка...')
      )}

      {/* если есть ошибки */}
      {errorLoading && (
        <div role="alert" style={{ textAlign: 'center' }}>{errorLoading}</div>
      )}

      {/* если посты закончились */}
      {isFinished && (
        <div role="alert" style={{ textAlign: 'center' }}>Новые посты появятся совсем скоро...</div>
      )}
    </ul>
  );
}
