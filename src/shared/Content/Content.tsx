import React from 'react';
import { Link } from 'react-router-dom';
import { Text, EColors } from '../Text';
import styles from './content.css';

interface IContentProp {
  children?: React.ReactNode;
}

export function Content({children}: IContentProp) {
  return (
    <main className={styles.content}>
      {children}
    </main>
  );
}
