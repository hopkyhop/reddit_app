import React from 'react';
import styles from './pagenotfound.css';

export function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.numbererror}>
        Ошибка 404
      </div>
      <div className={styles.texterror}>
        Страница не найдена
      </div>
    </div>
  );
}
