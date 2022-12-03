import React, { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import styles from './menudropdown.css';
import { MenuItemList } from '../MenuItemsList';
import { Text } from '../../../../Text';
import { EColors } from '../../../../Text';

interface IMenuDropdownProps {
  btnRef?: React.RefObject<HTMLButtonElement>
}

export function MenuDropdown({btnRef} : IMenuDropdownProps) {

  const [btnCoords, setBtnCoords] = useState({
    top: 0,
    left: 0,
  })

  useEffect(() => {
    function handleResize() {
      if (btnRef?.current) {
        const coords = btnRef.current.getBoundingClientRect();
        console.log(coords)
        setBtnCoords({
          top: coords.top,
          left: coords.left,
        })
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <div className={styles.dropdown} style={{top: `${btnCoords.top + window.pageYOffset + 50 + 'px'}`, right: `calc(100% - ${btnCoords.left + 'px'})`}}>
      <MenuItemList postId='123' />
      <button className={styles.closeButton}>
        <Text mobileSize={12} size={14} color={EColors.gray66}>
          Закрыть
        </Text>
      </button>
    </div>
  );
}
