import React from 'react';
import {useParams} from "react-router-dom";

import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

import styles from './Post.module.css';

const postData = {
    title: "Space for your heading, can be larger so don’t worry - large heading looks better",
    date: "22. 6. 2020",
    tags: ['Food', 'Recepies', 'Fresh', 'Vegetable'],
    category: "Dinner",
    image: "/assets/blog/11.png",
    author: {
        name: "Admin",
        avatar: "/assets/avatar/avatar1.png"
    },
    desc: 'There’s nothing like a warm cup of tea to start your morning—or maybe you’re all about an iced hibiscus on a sunny Saturday afternoon. Whether you’re just craving chamomile or are looking to ditch your coffee dependency, here’s our go-to guide on incorporating a few new teas into your daily routine! '
};

const Post = ({data = postData}) => {

    let {id} = useParams();

    const breadcrumbsData = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Blog list",
            link: "/blog"
        },
        {
            name: `Post ${id}`,
            link: `/post/${id}`
        },
    ];
    
    const {title, date, tags, image, author, category, desc} = data;

    return (
        <>
            <Breadcrumbs data={breadcrumbsData}/>

            <div className={styles.wrapper}>

                <div className={styles.card}>
                    <img src={image} alt={title} className={styles.image}/>
                    <div className={styles.wrapperCard}>
                        <div className={styles.wrapperCardBox}>
                            <div className={styles.wrapperCardLeft}>
                                <div className={styles.wrapperCardTitle}>
                                    <p>Date:</p>
                                    <p>Category:</p>
                                    <p>Author:</p>
                                </div>
                                <div className={styles.wrapperCardTitleData}>
                                    <p>{date}</p>
                                    <p>{category}</p>
                                    <p>{author.name}</p>
                                </div>
                            </div>
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>

                <div className={styles.mainWrapper}>

                    <div className={styles.left}>
                        <div className={styles.leftWrapper}>
                            <h2>Tags</h2>
                            <div className={styles.tags}>
                                {tags.map(tag => <p className={styles.tag}>{tag}</p>)}
                                
                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default Post;