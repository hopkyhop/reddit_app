import React from 'react';
import styles from './children.css';
import ReactDOM from 'react-dom';


export function Children({ children }: {children: React.ReactNode}) {
  const node = document.querySelector('#dropdown_root');
  if (!node) return null;
  
  return ReactDOM.createPortal((
    <>
      {children}
    </>
  ),document.querySelector('#dropdown_root') as HTMLElement);
}
