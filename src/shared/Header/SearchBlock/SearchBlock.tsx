import React from 'react';
import { useUserData } from '../../../hooks/useUserData';
// import { userContext } from '../../context/userContext';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';

export function SearchBlock() {

  const { data, loading } = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name}/>
    </div>
  );
}
