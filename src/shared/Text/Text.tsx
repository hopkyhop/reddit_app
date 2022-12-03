import React from 'react';
import styles from './text.css';
import classNames from 'classNames'

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColors {
  black = 'black',
  white = 'white',
  orange = 'orange',
  green = 'green',
  grayF4 = 'grayF4',
  grayF3 = 'grayF3',
  grayD9 = 'grayD9',
  grayC4 = 'grayC4',
  gray99 = 'gray99',
  gray66 = 'gray66',
}

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size : TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color ?: EColors;
  bold ?: boolean;
}

export function Text(props: ITextProps) {
  const { 
    As='span', 
    color=EColors.black, 
    bold,
    children, 
    size, 
    mobileSize, 
    tabletSize, 
    desktopSize 
  } = props;

  const classes = classNames(
    styles[color],
    styles[`s${size}`],
    { [styles.bold]: bold },
    { [styles[`m${mobileSize}`]]: mobileSize },   //данная запись проверяет передали ли мы mobileSize
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
  )

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
