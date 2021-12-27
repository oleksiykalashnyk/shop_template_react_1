import React from 'react';

import {useNavigate} from "react-router-dom";

import styles from './HomeBanner.module.css';
import {FiChevronRight} from "react-icons/fi";

const homeBannerData = {
    title: "Space for heading",
    subFocus: "Banner subfocus",
    button: {
        text: "Read recepies",
        link: "/blog"
    }
}

const HomeBanner = ({title = homeBannerData.title, subFocus = homeBannerData.subFocus, button = homeBannerData.button}) => {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <p>{subFocus}</p>
                <h2>{title}</h2>
            </div>

            <div className={styles.button} onClick={()=> navigate(`/${button.link}`)}>
                <p>{button.text} <FiChevronRight/></p>
            </div>
        </div>
    );
};

export default HomeBanner;