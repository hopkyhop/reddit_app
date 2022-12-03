import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../Icons';
import styles from './cardmenu.css';
import { MenuItemList } from './MenuItemsList';
import { EColors, Text } from '../../../Text';
import { MenuDropdown } from './MenuDropdown';

export function CardMenu() {
    const btn = React.createRef<HTMLButtonElement>();

    return (
        <div className={styles.menu}>
            <Dropdown
                button={
                    <button className={styles.menuButton} ref={btn}>
                        <MenuIcon />
                    </button>
                }
            >
                <MenuDropdown btnRef={btn}/>
            </Dropdown>
        </div>
    );
}

