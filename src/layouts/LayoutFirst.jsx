import React from 'react';

import styles from './LayoutFirst.module.css';
import Navbar from "../components/navbar/Navbar";

const LayoutFirst = ({children}) => {
    return (
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.wrapper}>
                {children}
            </div>
        </div>
    );
};

export default LayoutFirst;