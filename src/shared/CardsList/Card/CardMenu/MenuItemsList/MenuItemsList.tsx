import React from 'react';
import styles from './menuitemslist.css';
import { BlockIcon, CommentsIcon, SaveIcon, ShareIcon, WarningIcon } from '../../../../Icons';
import { EColors, Text } from '../../../../Text';


interface IMenuItemListProps {
    postId: string;
}

export function MenuItemList( {postId} : IMenuItemListProps) {
    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem}>
                <CommentsIcon/>
                <Text size={12} color={EColors.gray99}>
                    Комментарии
                </Text>
            </li>
            <div className={styles.divider}/>            
            <li className={styles.menuItem}>
                <ShareIcon/>
                <Text size={12} color={EColors.gray99}>
                    Поделиться
                </Text>
            </li>
            <div className={styles.divider}/>            
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <BlockIcon/>
                <Text size={12} color={EColors.gray99}> 
                    Скрыть
                </Text>
            </li>
            <div className={styles.divider}/>   
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <SaveIcon/>
                <Text size={12} color={EColors.gray99}> 
                    Сохранить
                </Text>
            </li>
            <div className={styles.divider}/>             
            <li className={styles.menuItem}>
                <WarningIcon/>
                <Text size={12} color={EColors.gray99}>
                    Пожаловаться
                </Text>
            </li>
        </ul>
    )
}