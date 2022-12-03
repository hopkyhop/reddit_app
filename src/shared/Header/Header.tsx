import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { SortBlock } from './SortBlock';
import { TreadTitle } from './TreadTitle';

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock/>
      <TreadTitle />
      <SortBlock />
    </header>
  );
}
