import React from 'react';

import styles from './Home.module.css';

import BlogNav from "../../components/blog_nav/BlogNav";
import HomeBanner from "../../components/home_banner/homeBanner";

const Home = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <BlogNav buttonMoreCategories={true}/>
            </div>
            <div className={styles.right}>
                <HomeBanner/>
                <HomeBanner/>
            </div>
        </div>
    );
};

export default Home;