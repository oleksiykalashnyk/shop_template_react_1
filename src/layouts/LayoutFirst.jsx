import React from 'react';

import styles from './LayoutFirst.module.css';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const LayoutFirst = ({children}) => {
    return (
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.wrapper}>
                {children}
                <Footer/>
            </div>
        </div>
    );
};

export default LayoutFirst;