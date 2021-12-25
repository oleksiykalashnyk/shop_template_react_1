import React from 'react';

import styles from './BlogList.module.css';
import { BiGridAlt, BiListUl } from "react-icons/bi";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import BlogPreviewBig from "../../components/blog_preview_big/BlogPreviewBig";

const blogListData = {
    bigPosts: [
        {
            title: "It can be long don’t worry about that",
            data: "21. 6. 1993",
            tags: ['super', 'tag_65'],
            image: "/assets/blog/2.png",
            author: {
                name: "Ksenia",
                avatar: "/assets/avatar/avatar1.png"
            }
        },
        {
            title: "This is a space for your blog headline, it can be long don’t worry about that",
            data: "01. 5. 2021",
            tags: ['tag1', 'tag_152'],
            image: "/assets/blog/1.png",
            author: {
                name: "Alexey",
                avatar: "/assets/avatar/avatar1.png"
            }
        }
    ],
    smallPosts: []
}


const BlogList = () => {
    return (
        <div>
            <Breadcrumbs/>

            <div className={styles.blogListNavigation}>
                <h1>Fruit and vegetables</h1>
                <div className={styles.blogListNavigationElements}>
                    <div className={styles.blogListNavigationElements}>
                        <BiGridAlt color='#6A983C'/>
                        <p>Grid view</p>
                    </div>
                    <div className={styles.blogListNavigationElements}>
                        <BiListUl className={styles.blogListNavigationElementsMutedText}/>
                        <p className={styles.blogListNavigationElementsMutedText}>List view</p>
                    </div>
                    <div className={styles.blogListNavigationElements}>
                        <p className={styles.blogListNavigationElementsTag}>117</p>
                        <p className={styles.blogListNavigationElementsMutedText}>Products</p>
                    </div>
                </div>
            </div>

            <div className={styles.wrapper}>
                {blogListData.bigPosts.map(post => <BlogPreviewBig {...post}/>)}
            </div>
        </div>
    );
};

export default BlogList;