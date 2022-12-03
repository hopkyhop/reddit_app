import React from 'react';
import styles from './cardpreview.css';

interface ICardPreview {
  imgSrc: string
}

export function CardPreview({ imgSrc }: ICardPreview) {

  return (
    <div className={styles.preview}>
       {(imgSrc.startsWith('http') && (imgSrc.endsWith('.jpg') || imgSrc.endsWith('.png') || imgSrc.endsWith('.gif')) ) && 
       (<img className={styles.previewImg} src={imgSrc} alt="Post image" />) ||
       (<img className={styles.previewImg} src={'https://i.postimg.cc/Ghz2vbMG/PXt8-Gnqd-Yu-9lgzb3ies-JBLN21b-XEx-RV1-A45zdw4s-YE.png'} alt="Post image" />)
       }
    </div>
  );
}
