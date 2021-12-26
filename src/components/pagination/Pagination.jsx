import React from 'react';
import {FiChevronRight} from "react-icons/fi";

import styles from './Pagination.module.css';


const paginationData = {
    articles: 198,
    pages: 5,
    isPage: "3"
}

const createArray = length => [...Array(length)];


const Pagination = ({data = paginationData}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.showPages}>
                <p className={styles.title}>Page:</p>
                {createArray(data.pages).map((i, n) => ( n + 1 === +data.isPage ? <p className={styles.active}>{n + 1}</p> : <p>{n + 1}</p>))}
            </div>
            <div className={styles.nextPage}>Next page <FiChevronRight/></div>
            <div className={styles.totalArticles}>
                <p className={styles.tag}>192</p>
                <p>articles</p>
            </div>

        </div>
    );
};

export default Pagination;